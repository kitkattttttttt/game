namespace SpriteKind {
    export const direction = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    playerCharacter.setImage(assets.image`characterBack`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level0`)
    tiles.placeOnTile(playerCharacter, tiles.getTileLocation(1, 1))
    monster = sprites.create(assets.image`slime`, SpriteKind.Enemy)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (playerCharacter.overlapsWith(monster)) {
        scene.cameraShake(4, 500)
        tiles.setCurrentTilemap(tilemap`level6`)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    playerCharacter.setImage(assets.image`characterLeft`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    playerCharacter.setImage(assets.image`characterRight`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    playerCharacter.setImage(assets.image`characterFront`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    pressA = sprites.create(assets.image`myImage`, SpriteKind.direction)
    pressA.setPosition(monster.x, monster.y)
    for (let index = 0; index < 99999999; index++) {
        pause(5000)
    }
})
let pressA: Sprite = null
let monster: Sprite = null
let playerCharacter: Sprite = null
playerCharacter = sprites.create(assets.image`characterFront`, SpriteKind.Player)
playerCharacter.setPosition(80, 60)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnTile(playerCharacter, tiles.getTileLocation(4, 4))
forever(function () {
    controller.moveSprite(playerCharacter)
    scene.cameraFollowSprite(playerCharacter)
})
