import service from "@/util/request.js"
export function list() {
    return new Promise((resolve, reject) => {
        service.request({
            url: "/listdata",
            method: "get"
        }).then((ok) => {
            resolve(ok)
        }).catch((err) => {
            reject(err)
        })
    })
}