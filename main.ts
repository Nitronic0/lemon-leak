function setCoinPosition() {
    coin.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
    coin.say("I am here", 500)
}
function damagedAndSayMessage(mySprite: Sprite) {
    mySprite.startEffect(effects.spray, 500)
    mySprite.say("Ouch!", 500)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (player2, projectile) {
    damagedAndSayMessage(player2)
    damagedAndSayMessage(projectile)
})
let lemon = sprites.create(img`
    4 4 4 . . 4 4 4 4 4 . . . . . . 
    4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
    b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
    . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
    . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
    b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
    c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
    c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
    c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
    c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
    . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
    . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
    . . c 4 4 d 4 4 4 4 4 d d 5 d c 
    . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
    . . . . c c b 4 4 4 b b 4 5 4 4 
    . . . . . . c c c c c c b b 4 . 
    `, SpriteKind.Player)
let coin = sprites.create(img`
    . . . b b . . .
    . . b 5 5 b . .
    . b 5 d 1 5 b .
    . b 5 3 1 5 b .
    . c 5 3 1 d c .
    . c 5 1 d d c .
    . . f d d f . .
    . . . f f . . .
`, SpriteKind.Food)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function(player: Sprite, food: Sprite) {
    setCoinPosition()
    info.changeScoreBy(1)
})
info.startCountdown(30)
lemon.setPosition(80, 60)
scene.setBackgroundColor(10)
controller.moveSprite(lemon)
lemon.setFlag(SpriteFlag.StayInScreen, true)
// Create cherry
game.onUpdateInterval(2000, function () {
    sprites.createProjectileFromSide(img`
        . . . . . . . . . . . 6 6 6 6 6
        . . . . . . . . . 6 6 7 7 7 7 8
        . . . . . . 8 8 8 7 7 8 8 6 8 8
        . . e e e e c 6 6 8 8 . 8 7 8 .
        . e 2 5 4 2 e c 8 . . . 6 7 8 .
        e 2 4 2 2 2 2 2 c . . . 6 7 8 .
        e 2 2 2 2 2 2 2 c . . . 8 6 8 .
        e 2 e e 2 2 2 2 e e e e c 6 8 .
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 .
        . c 2 e e e 2 e 2 4 2 2 2 2 c .
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e
        . . . e c c e c 2 2 2 2 2 2 2 e
        . . . . . . . c 2 e e 2 2 e 2 c
        . . . . . . . c e e e e e e 2 c
        . . . . . . . . c e 2 2 2 2 c .
        . . . . . . . . . c c c c c . .
    `, Math.randomRange(50, 10), Math.randomRange(10, 50))
})
// Create strawberry
game.onUpdateInterval(500, function () {
    sprites.createProjectileFromSide(img`
        . . . . . . . 6 . . . . . . . .
        . . . . . . 8 6 6 . . . 6 8 . .
        . . . e e e 8 8 6 6 . 6 7 8 . .
        . . e 2 2 2 2 e 8 6 6 7 6 . . .
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . .
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 .
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . .
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 .
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 .
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 .
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 .
        e 2 2 2 2 2 2 2 4 e 2 e e c . .
        e e 2 e 2 2 4 2 2 e e e c . . .
        e e e e 2 e 2 2 e e e c . . . .
        e e e 2 e e c e c c c . . . . .
        . c c c c c c c . . . . . . . .
    `, Math.randomRange(-50, -10), Math.randomRange(10, 50))
})