import Page from './basic-page-model';
import { Selector } from 'testcafe';

fixture `Local fixture`
    .page `http://localhost:8000/`;

const page = new Page();

test('localtest', async t => {
    await t
        .expect(Selector("title").innerText).eql('Demo Site')
});