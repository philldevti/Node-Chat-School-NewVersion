module.exports = (hbs) => {
    hbs.registerHelper('checkedIf', require('./checkedIf'))
}