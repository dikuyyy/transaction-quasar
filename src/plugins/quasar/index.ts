import { Quasar, Notify, Dialog } from "quasar"
import { App } from "vue"

const useQuasar = (app: App) => {
    app.use(Quasar, {
        plugins: {
            Notify,
            Dialog
        }
    })
}

export default useQuasar