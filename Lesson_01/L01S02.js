//
// L01S02 - example server side script
// Gets a list of all tasks
var gr = new GlideRecord('task');
gr.addActiveQuery();
gr.query();

while (gr.next()) {
    gs.info(gr.getValue('number'));
}
