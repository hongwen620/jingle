import service from "@/util/request.js"
export function homeone() {
    return new Promise((resolve, reject) => {
        service.request({
            url: "/homedata",
            method: "get"
        }).then((ok) => {
            resolve(ok)
        }).catch((err) => {
            reject(err)
        })
    })
}