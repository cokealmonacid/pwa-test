import { Notification } from "@/utils/interfaces"

interface NotificationsProps {
  notifications: Notification[]
}

export const Notifications = ({ notifications }: NotificationsProps) => {
  return (
    <section className="w-[80%] md:w-[40%] mx-auto text-gray-800 my-8">
      <h1 className="font-bold text-2xl text-gray-600">Notificaciones</h1>
      <div className="my-4">
        {
          notifications && notifications.length ? notifications.map((notification: Notification) => (
            <div className="border-2 p-4 rounded-md mb-1" key={notification.id}>
              <h1 className="text-xl font-semibold mb-1 text-zinc-900">{notification.title}</h1>
              <p className="text-gray-500 font-medium text-base mb-1">{notification.body}</p>
              <p className="text-gray-400 font-light text-sm">{notification.created_at}</p>
            </div>
          )) : (
            <div className="border-2 border-yellow-300 rounded-md bg-yellow-100/50">
              <p className="text-xl p-4 text-yellow-400 font-semibold">No hay notificaciones disponibles</p>
            </div>
          )
        }
      </div>
    </section>
  )
}