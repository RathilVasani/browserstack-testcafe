import Page from './basic-page-model';

fixture `Single Test`
    .page `https://www.google.com/`;

const page = new Page();

test('singletest', async t => {
    await t
        .typeText('input[name="q"]','BrowserStack')
        .click('input[name="btnK"]')
});