module.exports = ({file, options, environment}) => ({
    // eslint-disable-line no-unused-vars
    parser: false,
    // parser: file.extname === '.sss' ? 'sugarss' : false,
    browserslist: ['Chrome 20', 'Safari 5', 'Edge 12', 'Explorer 8', 'Firefox 15'],
});
