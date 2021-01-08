import service from "@/util/request.js"
export function manbing() {
    return new Promise((resolve, reject) => {
        service.request({
            url: "/manbingdata",
            method: "get"
        }).then((ok) => {
            resolve(ok)
        }).catch((err) => {
            reject(err)
        })
    })
}