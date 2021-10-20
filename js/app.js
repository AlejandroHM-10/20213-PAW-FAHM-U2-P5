if (navigator.serviceWorker) {
    let url = ''
    const BASE_URL = window.location.href
    BASE_URL.startsWith('https:') ? url = '/20213-PAW-FAHM-P5/sw.js' : url = "/sw.js"
    navigator.serviceWorker.register(url)

}