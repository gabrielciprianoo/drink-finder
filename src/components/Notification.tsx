import { Fragment } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Transition } from "@headlessui/react";
import { useAppStore } from "../stores/useAppStore";

export default function Notification() {
  const notification = useAppStore((s) => s.notification);
  const closeNotification = useAppStore((s) => s.closeNotification);

  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-50"
    >
      <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
        <Transition
          show={notification.show}
          as={Fragment}
          enter="transform ease-out duration-300 transition"
          enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enterTo="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-xl bg-zinc-800 text-white shadow-lg border border-white/10">
            <div className="p-4 flex items-center gap-4">
              <div className="flex-shrink-0 mt-px">
                {notification.error ? (
                  <XCircleIcon className="h-8 w-8 text-red-500" />
                ) : (
                  <CheckCircleIcon className="h-8 w-8 text-fuchsia-400" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold">
                  {notification.error ? "Error" : "Éxito"}
                </p>
                <p className="mt-1 text-sm text-white/80">
                  {notification.text}
                </p>
              </div>
              <div className="flex-shrink-0">
                <button
                  onClick={closeNotification}
                  className="rounded-md hover:bg-white/10 p-1 transition"
                >
                  <XMarkIcon className="h-5 w-5 text-white/60 hover:text-white" />
                  <span className="sr-only">Cerrar</span>
                </button>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}
