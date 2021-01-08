import service from "@/util/request.js"
export function mana() {
    return new Promise((resolve, reject) => {
        service.request({
            url: "/manadata",
            method: "get"
        }).then((ok) => {
            resolve(ok)
        }).catch((err) => {
            reject(err)
        })
    })
}