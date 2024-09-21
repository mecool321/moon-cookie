namespace SpriteKind {
    export const Upgrade1 = SpriteKind.create()
    export const EnemyPoint = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (Cookie.isHittingTile(CollisionDirection.Bottom)) {
        Doublejumps = 0
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Doublejumps < MaxJumps) {
        Cookie.vy += -125
        Doublejumps += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level4`)
    tiles.placeOnRandomTile(Shark, assets.tile`myTile`)
    tiles.placeOnRandomTile(EnemyPoint, assets.tile`myTile`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Upgrade1, function (sprite, otherSprite) {
    MaxJumps += 1
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    timer.background(function () {
        ENEMYISATTACKING = 1
        EnemyAttackAnimation = 1
    })
    timer.after(1500, function () {
        if (spriteutils.distanceBetween(Cookie, Shark) < 20) {
            sprites.destroy(otherSprite)
            ENEMYISATTACKING = 0
        } else {
            ENEMYISATTACKING = 0
            EnemyAttackAnimation = 0
        }
    })
})
function StartGame () {
    timer.background(function () {
        Cookie = sprites.create(img`
            . . . . . 1 1 1 1 1 . . . . . 
            . . . 1 1 . . . . . 1 1 . . . 
            . . 1 . . . f f f . . . 1 . . 
            . 1 . . f f 4 4 4 f f . . 1 . 
            . 1 . f 4 e 4 4 e 4 4 f . 1 . 
            1 . . f 4 f 9 4 f 9 e f . . 1 
            1 . f e 4 1 f 4 1 f 4 4 f . 1 
            1 . f 4 4 4 4 4 4 4 4 4 f . 1 
            1 . f 4 4 f f 1 f f 4 e f . 1 
            1 . . f 4 4 f f f 4 4 f . . 1 
            . 1 . f e 4 4 4 4 4 4 f . 1 . 
            . 1 . . f f 4 4 e f f . . 1 . 
            . . 1 . . . f f f . . . 1 . . 
            . . . 1 1 . . . . . 1 1 . . . 
            . . . . . 1 1 1 1 1 . . . . . 
            `, SpriteKind.Player)
        Cookie.ay = 130
        controller.moveSprite(Cookie, 100, 0)
        scene.cameraFollowSprite(Cookie)
    })
    timer.background(function () {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69fffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        tiles.setCurrentTilemap(tilemap`level2`)
    })
    timer.background(function () {
        upgrade = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . e e 4 4 4 4 e e . . . . 
            . . . e 4 4 4 4 4 4 4 4 e . . . 
            . . e 4 4 4 4 e e 4 4 4 5 e . . 
            . . e 4 4 4 e e e e 4 4 5 e . . 
            . e 4 4 4 e e e e e e 4 5 5 e . 
            . e 4 4 4 4 4 e e 4 4 5 5 5 e . 
            . e 4 4 4 4 4 e e 4 4 5 5 5 e . 
            . e 4 4 4 4 4 e e 4 5 1 5 5 e . 
            . . e 4 4 4 4 e e 5 5 1 5 e . . 
            . . e 4 4 4 4 e e 1 1 5 5 e . . 
            . . . e 5 5 5 5 5 5 5 5 e . . . 
            . . . . e e 5 5 5 5 e e . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Upgrade1)
        tiles.placeOnRandomTile(upgrade, assets.tile`myTile0`)
    })
    timer.background(function () {
        EnemyPoint = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.EnemyPoint)
        tiles.placeOnRandomTile(EnemyPoint, assets.tile`myTile`)
    })
    timer.background(function () {
        Shark = sprites.create(img`
            .............ccfff..............
            ............cddbbf..............
            ....111....cddbbf...............
            ..11...11.fccbbcf............ccc
            .1..ff1ff1ccccccff.........ccbbc
            1.ffbbb1bb1bbbbbbcfff.....cdbbc.
            1fbbbbbbbb1cbcbbbbcccff..cddbbf.
            1bcbbbbbffb1cbcbbbcccccfffdbbf..
            1bbb1111ff11cbcbbbcccccccbbbcf..
            1fb1111111111bbbbcccccccccbccf..
            1.fccc33cc11bbbbccccccccfffbbcf.
            .1.fc131c111bbbcccccbdbc...fbbf.
            .1..f33c111cbbbfdddddcc.....fbbf
            ..1..ff1111fbdbbfddcc........fff
            ...1...11cccfbdbbfc.............
            ....111......fffff..............
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(Shark, assets.tile`myTile`)
    })
    timer.background(function () {
        MaxJumps = 1
    })
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
})
let upgrade: Sprite = null
let EnemyAttackAnimation = 0
let ENEMYISATTACKING = 0
let EnemyPoint: Sprite = null
let Shark: Sprite = null
let MaxJumps = 0
let Doublejumps = 0
let Cookie: Sprite = null
StartGame()
forever(function () {
    if (spriteutils.distanceBetween(Cookie, Shark) < 150) {
        if (EnemyAttackAnimation == 0) {
            Shark.follow(Cookie, 50)
            characterAnimations.loopFrames(
            Shark,
            [img`
                .............ccfff..............
                ...........ccddbcf..............
                ..........ccddbbf...............
                ..........fccbbcf...............
                .....fffffccccccff.........ccc..
                ...ffbbbbbbbcbbbbcfff....ccbbc..
                ..fbbbbbbbbcbcbbbbcccff.cdbbc...
                ffbbbbbbffbbcbcbbbcccccfcdbbf...
                fbcbbb11ff1bcbbbbbcccccffbbf....
                fbbb11111111bbbbbcccccccbbcf....
                .fb11133cc11bbbbcccccccccccf....
                ..fccc31c111bbbcccccbdbffbbcf...
                ...fc13c111cbbbfcddddcc..fbbf...
                ....fccc111fbdbbccdcc.....fbbf..
                ........ccccfcdbbcc........fff..
                .............fffff..............
                `,img`
                .............ccfff..............
                ............cddbbf..............
                ...........cddbbf...............
                ..........fccbbcf............ccc
                ....ffffffccccccff.........ccbbc
                ..ffbbbbbbbbbbbbbcfff.....cdbbc.
                ffbbbbbbbbbcbcbbbbcccff..cddbbf.
                fbcbbbbbffbbcbcbbbcccccfffdbbf..
                fbbb1111ff1bcbcbbbcccccccbbbcf..
                .fb11111111bbbbbbcccccccccbccf..
                ..fccc33cc11bbbbccccccccfffbbcf.
                ...fc131c111bbbcccccbdbc...fbbf.
                ....f33c111cbbbfdddddcc.....fbbf
                .....ff1111fbdbbfddcc........fff
                .......cccccfbdbbfc.............
                .............fffff..............
                `,img`
                ..............cfff..............
                ............ccddbf..............
                ...........cbddbff.........ccc..
                ..........fccbbcf.........cbbc..
                ...fffffffccccccff.......cdbc...
                .ffcbbbbbbbbbbbbbcfff....cdbf...
                fcbbbbbbbbbcbbbbbbcccff.cdbf....
                fbcbbbbffbbbcbcbbbcccccffdcf....
                fbb1111ffbbbcbcbbbccccccbbcf....
                .fb11111111bbcbbbccccccccbbcf...
                ..fccc33cb11bbbbcccccccfffbbf...
                ...fc131c111bbbcccccbdbc..fbbf..
                ....f33c111cbbccdddddbc....fff..
                .....ff1111fdbbccddbcc..........
                .......cccccfdbbbfcc............
                .............fffff..............
                `,img`
                .............ccfff..............
                ............cddbbf..............
                ...........cddbbf...............
                ..........fccbbcf............ccc
                ....ffffffccccccff.........ccbbc
                ..ffbbbbbbbbbbbbbcfff.....cdbbc.
                ffbbbbbbbbbcbcbbbbcccff..cddbbf.
                fbcbbbbbffbbcbcbbbcccccfffdbbf..
                fbbb1111ff1bcbcbbbcccccccbbbcf..
                .fb11111111bbbbbbcccccccccbccf..
                ..fccc33cc11bbbbccccccccfffbbcf.
                ...fc131c111bbbcccccbdbc...fbbf.
                ....f33c111cbbbfdddddcc.....fbbf
                .....ff1111fbdbbfddcc........fff
                .......cccccfbdbbfc.............
                .............fffff..............
                `],
            250,
            characterAnimations.rule(Predicate.MovingLeft)
            )
            characterAnimations.loopFrames(
            Shark,
            [img`
                ..............fffcc.............
                ..............fcbddcc...........
                ...............fbbddcc..........
                ...............fcbbccf..........
                ..ccc.........ffccccccfffff.....
                ..cbbcc....fffcbbbbcbbbbbbbff...
                ...cbbdc.ffcccbbbbcbcbbbbbbbbf..
                ...fbbdcfcccccbbbcbcbbffbbbbbbff
                ....fbbffcccccbbbbbcb1ff11bbbcbf
                ....fcbbcccccccbbbbb11111111bbbf
                ....fcccccccccccbbbb11cc33111bf.
                ...fcbbffbdbcccccbbb111c13cccf..
                ...fbbf..ccddddcfbbbc111c31cf...
                ..fbbf.....ccdccbbdbf111cccf....
                ..fff........ccbbdcfcccc........
                ..............fffff.............
                `,img`
                ..............fffcc.............
                ..............fbbddc............
                ...............fbbddc...........
                ccc............fcbbccf..........
                cbbcc.........ffccccccffffff....
                .cbbdc.....fffcbbbbbbbbbbbbbff..
                .fbbddc..ffcccbbbbcbcbbbbbbbbbff
                ..fbbdfffcccccbbbcbcbbffbbbbbcbf
                ..fcbbbcccccccbbbcbcb1ff1111bbbf
                ..fccbcccccccccbbbbbb11111111bf.
                .fcbbfffccccccccbbbb11cc33cccf..
                .fbbf...cbdbcccccbbb111c131cf...
                fbbf.....ccdddddfbbbc111c33f....
                fff........ccddfbbdbf1111ff.....
                .............cfbbdbfccccc.......
                ..............fffff.............
                `,img`
                ..............fffc..............
                ..............fbddcc............
                ..ccc.........ffbddbc...........
                ..cbbc.........fcbbccf..........
                ...cbdc.......ffccccccfffffff...
                ...fbdc....fffcbbbbbbbbbbbbbcff.
                ....fbdc.ffcccbbbbbbcbbbbbbbbbcf
                ....fcdffcccccbbbcbcbbbffbbbbcbf
                ....fcbbccccccbbbcbcbbbff1111bbf
                ...fcbbccccccccbbbcbb11111111bf.
                ...fbbfffcccccccbbbb11bc33cccf..
                ..fbbf..cbdbcccccbbb111c131cf...
                ..fff....cbdddddccbbc111c33f....
                ..........ccbddccbbdf1111ff.....
                ............ccfbbbdfccccc.......
                ..............fffff.............
                `,img`
                ..............fffcc.............
                ..............fbbddc............
                ...............fbbddc...........
                ccc............fcbbccf..........
                cbbcc.........ffccccccffffff....
                .cbbdc.....fffcbbbbbbbbbbbbbff..
                .fbbddc..ffcccbbbbcbcbbbbbbbbbff
                ..fbbdfffcccccbbbcbcbbffbbbbbcbf
                ..fcbbbcccccccbbbcbcb1ff1111bbbf
                ..fccbcccccccccbbbbbb11111111bf.
                .fcbbfffccccccccbbbb11cc33cccf..
                .fbbf...cbdbcccccbbb111c131cf...
                fbbf.....ccdddddfbbbc111c33f....
                fff........ccddfbbdbf1111ff.....
                .............cfbbdbfccccc.......
                ..............fffff.............
                `],
            250,
            characterAnimations.rule(Predicate.MovingRight)
            )
        } else {
            Shark.follow(Cookie, 25)
            characterAnimations.loopFrames(
            Shark,
            [img`
                .................ccfff..............
                ................cddbbf..............
                ...............cddbbf...............
                ..............fccbbcf............ccc
                ........ffffffccccccff.........ccbbc
                ......ffbbbbbbbbbbbbbcfff.....cdbbc.
                ....ffbbbbbbbbbcbcbbbbcccff..cddbbf.
                ....fbcbbbbbffbbcbcbbbcccccfffdbbf..
                ....fbbb1111ff1bcbcbbbcccccccbbbcf..
                .....fb11111111bbbbbbcccccccccbccf..
                ......fccc33cc11bbbbccccccccfffbbcf.
                .......fc131c111bbbcccccbdbc...fbbf.
                ........f33c111cbbbfdddddcc.....fbbf
                .........ff1111fbdbbfddcc........fff
                ...........cccccfbdbbfc.............
                .................fffff..............
                `,img`
                .................ccfff..............
                ................cddbbf..............
                ...............cddbbf...............
                .........ffffffccbbcf...............
                ......fffbbbbbbbbcccff..............
                .....fbbbbbbbbbbbbbbbcfff......ccccc
                .....bcbbbbbffbcbcbbbbcccff...cdbbbc
                .....bbb1111ffbbcbcbbbcccccffcddbbc.
                .....fb11111111bcbcbbbcccccccbdbbf..
                ......fccc33c11bbbbbbcccccccccbbcf..
                .......fc131cc11bbbbccccccccffbccf..
                ........f33c1111bbbcccccbdbc..fbbcf.
                .........ff1111cbbbfdddddcc....fbbf.
                ...........ccc1fbdbbfddcc.......fbbf
                ..............ccfbdbbfc..........fff
                .................fffff..............
                `,img`
                ..................ccfff.............
                .................cddbbf.............
                ........fffffffffddbbf..............
                .......fbbbbbbbbbfcbcf..............
                .......fbbc111bffbbccffff...........
                .......fb111111ffbbbbbcccff....ccccc
                ........f1cc3311bbcbcbbccccf..cdbbbc
                ........fcc131c1bbbcbcbcccccfcddbbc.
                .........f111111bbbcbcbccccccbdbbf..
                .........f1111111bbbbbccccccccbbcf..
                ..........f111111bbbbcccccccffbccf..
                ...........c1111cbbbcccccbdbc.fbbcf.
                ............cc11cbbbfddddddc...fbbf.
                ..............cffbdbbfdddcc.....fbbf
                .................fbdbbfcc........fff
                ..................fffff.............
                `,img`
                ....................ccfff...........
                ..........fffffffffcbbbbf...........
                .........fbbbbbbbbbfffbf............
                .........fbb111bffbbbbff............
                .........fb11111ffbbbbbcff..........
                .........f1cccc11bbcbcbcccf.........
                ..........fc1c1c1bbbcbcbcccf...ccccc
                ............c3331bbbcbcbccccfccddbbc
                ...........c333c1bbbbbbbcccccbddbcc.
                ...........c331c11bbbbbcccccccbbcc..
                ..........cc13c111bbbbccccccffbccf..
                ..........c111111cbbbcccccbbc.fccf..
                ...........cc1111cbbbfdddddc..fbbcf.
                .............cccffbdbbfdddc....fbbf.
                ..................fbdbbfcc......fbbf
                ...................fffff.........fff
                `,img`
                ...........fffffff...ccfff..........
                ..........fbbbbbbbffcbbbbf..........
                ..........fbb111bbbbbffbf...........
                ..........fb11111ffbbbbff...........
                ..........f1cccc1ffbbbbbcff.........
                ..........ffc1c1c1bbcbcbcccf........
                ...........fcc3331bbbcbcbcccf..ccccc
                ............c333c1bbbcbcbccccfcddbbc
                ............c333c1bbbbbbbcccccddbcc.
                ............c333c11bbbbbccccccbbcc..
                ...........cc331c11bbbbccccccfbccf..
                ...........cc13c11cbbbcccccbbcfccf..
                ...........c111111cbbbfdddddc.fbbcf.
                ............cc1111fbdbbfdddc...fbbf.
                ..............cccfffbdbbfcc.....fbbf
                ....................fffff........fff
                `,img`
                ....................................
                ....................................
                ....................................
                ...............ccffff...............
                ..............cddbbbf...............
                .......ffffffcddbbbf................
                .....ffbbbbbbbbbbbbbcfff.......ccccc
                ...ffbbbbbbbbcbcbbbbbcccff....cdbbbc
                ..fbbbbbbbbbbcbbcbbbbcccccfffcddbbc.
                .fbcbbbbbbbbbbcbcbbbbccccccccbdbbf..
                .fbbbbbbbfffbbcbbbbbccccccccccbbcf..
                .ffbb1111fffbbcbbbbcccccccbcffbccf..
                ..ff111111111bbbbccccccbbbcc..fbbcf.
                ....ccccccc111bdbbbfddbccc.....ffbbf
                ........ccccccfbdbbbfcc..........fff
                ...............ffffff...............
                `,img`
                ....................................
                ....................................
                ....................................
                ...............ccffff...............
                ..............cddbbbf...............
                .......ffffffcddbbbf................
                .....ffbbbbbbbbbbbbbcfff.......ccccc
                ...ffbbbbbbbbcbcbbbbbcccff....cdbbbc
                ..fbbbbbbbbbbcbbcbbbbcccccfffcddbbc.
                .fbcbbbbbbbbbbcbcbbbbccccccccbdbbf..
                .fbbbbbbbfffbbcbbbbbccccccccccbbcf..
                .ffbb1111fffbbcbbbbcccccccbcffbccf..
                ..ff111111111bbbbccccccbbbcc..fbbcf.
                ....ccccccc111bdbbbfddbccc.....ffbbf
                ........ccccccfbdbbbfcc..........fff
                ...............ffffff...............
                `],
            250,
            characterAnimations.rule(Predicate.MovingLeft)
            )
            characterAnimations.loopFrames(
            Shark,
            [img`
                ..............fffcc.................
                ..............fbbddc................
                ...............fbbddc...............
                ccc............fcbbccf..............
                cbbcc.........ffccccccffffff........
                .cbbdc.....fffcbbbbbbbbbbbbbff......
                .fbbddc..ffcccbbbbcbcbbbbbbbbbff....
                ..fbbdfffcccccbbbcbcbbffbbbbbcbf....
                ..fcbbbcccccccbbbcbcb1ff1111bbbf....
                ..fccbcccccccccbbbbbb11111111bf.....
                .fcbbfffccccccccbbbb11cc33cccf......
                .fbbf...cbdbcccccbbb111c131cf.......
                fbbf.....ccdddddfbbbc111c33f........
                fff........ccddfbbdbf1111ff.........
                .............cfbbdbfccccc...........
                ..............fffff.................
                `,img`
                ..............fffcc.................
                ..............fbbddc................
                ...............fbbddc...............
                ...............fcbbccffffff.........
                ..............ffcccbbbbbbbbfff......
                ccccc......fffcbbbbbbbbbbbbbbbf.....
                cbbbdc...ffcccbbbbcbcbffbbbbbcb.....
                .cbbddcffcccccbbbcbcbbff1111bbb.....
                ..fbbdbcccccccbbbcbcb11111111bf.....
                ..fcbbcccccccccbbbbbb11c33cccf......
                ..fccbffccccccccbbbb11cc131cf.......
                .fcbbf..cbdbcccccbbb1111c33f........
                .fbbf....ccdddddfbbbc1111ff.........
                fbbf.......ccddfbbdbf1ccc...........
                fff..........cfbbdbfcc..............
                ..............fffff.................
                `,img`
                .............fffcc..................
                .............fbbddc.................
                ..............fbbddfffffffff........
                ..............fcbcfbbbbbbbbbf.......
                ...........ffffccbbffb111cbbf.......
                ccccc....ffcccbbbbbff111111bf.......
                cbbbdc..fccccbbcbcbb1133cc1f........
                .cbbddcfcccccbcbcbbb1c131ccf........
                ..fbbdbccccccbcbcbbb111111f.........
                ..fcbbccccccccbbbbb1111111f.........
                ..fccbffcccccccbbbb111111f..........
                .fcbbf.cbdbcccccbbbc1111c...........
                .fbbf...cddddddfbbbc11cc............
                fbbf.....ccdddfbbdbffc..............
                fff........ccfbbdbf.................
                .............fffff..................
                `,img`
                ...........fffcc....................
                ...........fbbbbcfffffffff..........
                ............fbfffbbbbbbbbbf.........
                ............ffbbbbffb111bbf.........
                ..........ffcbbbbbff11111bf.........
                .........fcccbcbcbb11cccc1f.........
                ccccc...fcccbcbcbbb1c1c1cf..........
                cbbddccfccccbcbcbbb1333c............
                .ccbddbcccccbbbbbbb1c333c...........
                ..ccbbcccccccbbbbb11c133c...........
                ..fccbffccccccbbbb111c31cc..........
                ..fccf.cbbcccccbbbc111111c..........
                .fcbbf..cdddddfbbbc1111cc...........
                .fbbf....cdddfbbdbffccc.............
                fbbf......ccfbbdbf..................
                fff.........fffff...................
                `,img`
                ..........fffcc...fffffff...........
                ..........fbbbbcffbbbbbbbf..........
                ...........fbffbbbbb111bbf..........
                ...........ffbbbbff11111bf..........
                .........ffcbbbbbff1cccc1f..........
                ........fcccbcbcbb1c1c1cff..........
                ccccc..fcccbcbcbbb1333ccf...........
                cbbddcfccccbcbcbbb1c333c............
                .ccbddcccccbbbbbbb1c333c............
                ..ccbbccccccbbbbb11c333c............
                ..fccbfccccccbbbb11c133cc...........
                ..fccfcbbcccccbbbc11c31cc...........
                .fcbbf.cdddddfbbbc111111c...........
                .fbbf...cdddfbbdbf1111cc............
                fbbf.....ccfbbdbfffccc..............
                fff........fffff....................
                `,img`
                ....................................
                ....................................
                ....................................
                ...............ffffcc...............
                ...............fbbbddc..............
                ................fbbbddcffffff.......
                ccccc.......fffcbbbbbbbbbbbbbff.....
                cbbbdc....ffcccbbbbbcbcbbbbbbbbff...
                .cbbddcfffcccccbbbbcbbcbbbbbbbbbbf..
                ..fbbdbccccccccbbbbcbcbbbbbbbbbbcbf.
                ..fcbbccccccccccbbbbbcbbfffbbbbbbbf.
                ..fccbffcbcccccccbbbbcbbfff1111bbff.
                .fcbbf..ccbbbccccccbbbb111111111ff..
                fbbff.....cccbddfbbbdb111ccccccc....
                fff..........ccfbbbdbfcccccc........
                ...............ffffff...............
                `,img`
                ....................................
                ....................................
                ....................................
                ...............ffffcc...............
                ...............fbbbddc..............
                ................fbbbddcffffff.......
                ccccc.......fffcbbbbbbbbbbbbbff.....
                cbbbdc....ffcccbbbbbcbcbbbbbbbbff...
                .cbbddcfffcccccbbbbcbbcbbbbbbbbbbf..
                ..fbbdbccccccccbbbbcbcbbbbbbbbbbcbf.
                ..fcbbccccccccccbbbbbcbbfffbbbbbbbf.
                ..fccbffcbcccccccbbbbcbbfff1111bbff.
                .fcbbf..ccbbbccccccbbbb111111111ff..
                fbbff.....cccbddfbbbdb111ccccccc....
                fff..........ccfbbbdbfcccccc........
                ...............ffffff...............
                `],
            250,
            characterAnimations.rule(Predicate.MovingRight)
            )
        }
    } else {
        Shark.follow(EnemyPoint, 25)
    }
})
forever(function () {
    characterAnimations.loopFrames(
    Cookie,
    [img`
        . . . . . 1 1 1 1 1 . . . . . 
        . . . 1 1 . . . . . 1 1 . . . 
        . . 1 . . . f f f . . . 1 . . 
        . 1 . . f f 4 4 e f f . . 1 . 
        . 1 . f 4 e 4 4 4 4 4 f . 1 . 
        1 . . f 4 9 f 4 f 4 4 f . . 1 
        1 . f 4 e f 1 4 f f 4 e f . 1 
        1 . f 4 4 4 4 4 1 f 4 4 f . 1 
        1 . f 4 4 9 f 4 f f 4 4 f . 1 
        1 . . f e f 1 4 f 4 4 f . . 1 
        . 1 . f 4 4 4 4 4 4 e f . 1 . 
        . 1 . . f f e 4 4 f f . . 1 . 
        . . 1 . . . f f f . . . 1 . . 
        . . . 1 1 . . . . . 1 1 . . . 
        . . . . . 1 1 1 1 1 . . . . . 
        `,img`
        . . . . . 1 1 1 1 1 . . . . . 
        . . . 1 1 . . . . . 1 1 . . . 
        . . 1 . . . f f f . . . 1 . . 
        . 1 . . f f e 4 4 f f . . 1 . 
        . 1 . f 4 4 4 4 4 4 e f . 1 . 
        1 . . f 4 4 f f f 4 4 f . . 1 
        1 . f e 4 f f 1 f f 4 4 f . 1 
        1 . f 4 4 4 4 4 4 4 4 4 f . 1 
        1 . f 4 4 f 1 4 f 1 4 e f . 1 
        1 . . f e 9 f 4 9 f 4 f . . 1 
        . 1 . f 4 4 e 4 4 e 4 f . 1 . 
        . 1 . . f f 4 4 4 f f . . 1 . 
        . . 1 . . . f f f . . . 1 . . 
        . . . 1 1 . . . . . 1 1 . . . 
        . . . . . 1 1 1 1 1 . . . . . 
        `,img`
        . . . . . 1 1 1 1 1 . . . . . 
        . . . 1 1 . . . . . 1 1 . . . 
        . . 1 . . . f f f . . . 1 . . 
        . 1 . . f f 4 4 e f f . . 1 . 
        . 1 . f e 4 4 4 4 4 4 f . 1 . 
        1 . . f 4 4 f 4 1 f e f . . 1 
        1 . f 4 4 f f 4 f 9 4 4 f . 1 
        1 . f 4 4 f 1 4 4 4 4 4 f . 1 
        1 . f e 4 f f 4 1 f e 4 f . 1 
        1 . . f 4 4 f 4 f 9 4 f . . 1 
        . 1 . f 4 4 4 4 4 e 4 f . 1 . 
        . 1 . . f f e 4 4 f f . . 1 . 
        . . 1 . . . f f f . . . 1 . . 
        . . . 1 1 . . . . . 1 1 . . . 
        . . . . . 1 1 1 1 1 . . . . . 
        `,img`
        . . . . . 1 1 1 1 1 . . . . . 
        . . . 1 1 . . . . . 1 1 . . . 
        . . 1 . . . f f f . . . 1 . . 
        . 1 . . f f 4 4 4 f f . . 1 . 
        . 1 . f 4 e 4 4 e 4 4 f . 1 . 
        1 . . f 4 f 9 4 f 9 e f . . 1 
        1 . f e 4 1 f 4 1 f 4 4 f . 1 
        1 . f 4 4 4 4 4 4 4 4 4 f . 1 
        1 . f 4 4 f f 1 f f 4 e f . 1 
        1 . . f 4 4 f f f 4 4 f . . 1 
        . 1 . f e 4 4 4 4 4 4 f . 1 . 
        . 1 . . f f 4 4 e f f . . 1 . 
        . . 1 . . . f f f . . . 1 . . 
        . . . 1 1 . . . . . 1 1 . . . 
        . . . . . 1 1 1 1 1 . . . . . 
        `],
    150,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Cookie,
    [img`
        . . . . . 1 1 1 1 1 . . . . . 
        . . . 1 1 . . . . . 1 1 . . . 
        . . 1 . . . f f f . . . 1 . . 
        . 1 . . f f 4 4 e f f . . 1 . 
        . 1 . f e 4 4 4 4 4 4 f . 1 . 
        1 . . f 4 4 f 4 1 f e f . . 1 
        1 . f 4 4 f f 4 f 9 4 4 f . 1 
        1 . f 4 4 f 1 4 4 4 4 4 f . 1 
        1 . f e 4 f f 4 1 f e 4 f . 1 
        1 . . f 4 4 f 4 f 9 4 f . . 1 
        . 1 . f 4 4 4 4 4 e 4 f . 1 . 
        . 1 . . f f e 4 4 f f . . 1 . 
        . . 1 . . . f f f . . . 1 . . 
        . . . 1 1 . . . . . 1 1 . . . 
        . . . . . 1 1 1 1 1 . . . . . 
        `,img`
        . . . . . 1 1 1 1 1 . . . . . 
        . . . 1 1 . . . . . 1 1 . . . 
        . . 1 . . . f f f . . . 1 . . 
        . 1 . . f f e 4 4 f f . . 1 . 
        . 1 . f 4 4 4 4 4 4 e f . 1 . 
        1 . . f 4 4 f f f 4 4 f . . 1 
        1 . f e 4 f f 1 f f 4 4 f . 1 
        1 . f 4 4 4 4 4 4 4 4 4 f . 1 
        1 . f 4 4 f 1 4 f 1 4 e f . 1 
        1 . . f e 9 f 4 9 f 4 f . . 1 
        . 1 . f 4 4 e 4 4 e 4 f . 1 . 
        . 1 . . f f 4 4 4 f f . . 1 . 
        . . 1 . . . f f f . . . 1 . . 
        . . . 1 1 . . . . . 1 1 . . . 
        . . . . . 1 1 1 1 1 . . . . . 
        `,img`
        . . . . . 1 1 1 1 1 . . . . . 
        . . . 1 1 . . . . . 1 1 . . . 
        . . 1 . . . f f f . . . 1 . . 
        . 1 . . f f 4 4 e f f . . 1 . 
        . 1 . f 4 e 4 4 4 4 4 f . 1 . 
        1 . . f 4 9 f 4 f 4 4 f . . 1 
        1 . f 4 e f 1 4 f f 4 e f . 1 
        1 . f 4 4 4 4 4 1 f 4 4 f . 1 
        1 . f 4 4 9 f 4 f f 4 4 f . 1 
        1 . . f e f 1 4 f 4 4 f . . 1 
        . 1 . f 4 4 4 4 4 4 e f . 1 . 
        . 1 . . f f e 4 4 f f . . 1 . 
        . . 1 . . . f f f . . . 1 . . 
        . . . 1 1 . . . . . 1 1 . . . 
        . . . . . 1 1 1 1 1 . . . . . 
        `,img`
        . . . . . 1 1 1 1 1 . . . . . 
        . . . 1 1 . . . . . 1 1 . . . 
        . . 1 . . . f f f . . . 1 . . 
        . 1 . . f f 4 4 4 f f . . 1 . 
        . 1 . f 4 e 4 4 e 4 4 f . 1 . 
        1 . . f 4 f 9 4 f 9 e f . . 1 
        1 . f e 4 1 f 4 1 f 4 4 f . 1 
        1 . f 4 4 4 4 4 4 4 4 4 f . 1 
        1 . f 4 4 f f 1 f f 4 e f . 1 
        1 . . f 4 4 f f f 4 4 f . . 1 
        . 1 . f e 4 4 4 4 4 4 f . 1 . 
        . 1 . . f f 4 4 e f f . . 1 . 
        . . 1 . . . f f f . . . 1 . . 
        . . . 1 1 . . . . . 1 1 . . . 
        . . . . . 1 1 1 1 1 . . . . . 
        `],
    150,
    characterAnimations.rule(Predicate.MovingRight)
    )
})
