module.exports = {
    'Play button is visible': (browser) => {
        browser
            .init()
            .waitForElementVisible('body', 1000)
            .assert.expect.element("#play-pause-button").to.be.visible
            .end()
    },
    after: (browser) => {
        browser.end()
    }
};