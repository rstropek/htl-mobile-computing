exports.square = x => x * x;
exports.double = x => x * 2;
exports.abs = x => {
    if (x < 0) return x * (-1);
    return x;
};
exports.demoModuleWrapper = () => {
    console.log(__filename);
    console.log(__dirname);
}