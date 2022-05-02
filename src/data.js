

export function imagesArray() {
    var imagesArray = []
    for (let i = 1; i < 100; i++) {
        var img = { "link": 'meat' + i + '.png', 'index': i, 'type': 'meat' }
        imagesArray.push(img)
        img = { "link": 'event_background' + i + '.png', 'index': i, 'type': 'event_background' }
        imagesArray.push(img)
        img = { "link": 'desserts' + i + '.png', 'index': i, 'type': 'desserts' }
        imagesArray.push(img)
    }
    return imagesArray
}

export function imagesArrayCategory(category) {
    var imagesArray = []
    for (let i = 1; i < 100; i++) {
        var img = { "link": category + i + '.png', 'index': i, 'type': category }
        imagesArray.push(img)
    }
    return imagesArray
}
