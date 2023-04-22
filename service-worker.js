self.addEventListener("fetch",(e)=>{
    const {method,headers,url} = e.request
})

self.addEventListener("push",(e)=>{
    const payload = e.data?e.data.json():'no payload'
    e.waitUntil(
        self.registration.showNotification(payload.title,{body:payload.body})
    )
})