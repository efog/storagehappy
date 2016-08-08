var model = module.exports;

/**
 * Delete file on storage request handler
 *
 * @param {any} req request object
 * @param {any} res response object
 * @returns {undefined}
 */
function deleteFile(req, res) {
    res.send(200);
    res.end();
}
model.delete = deleteFile;

/**
 * Create file on storage request handler
 *
 * @param {any} req request object
 * @param {any} res response object
 * @returns {undefined}
 */
function create(req, res) {
    res.send(200);
    res.end();
}
model.create = create;

/**
 * Update file on storage request handler
 *
 * @param {any} req request object
 * @param {any} res response object
 * @returns {undefined}
 */
function update(req, res) {
    res.send(200);
    res.end();
}
model.update = update;

/**
 * List files on storage request handler
 *
 * @param {any} req request object
 * @param {any} res response object
 * @returns {undefined}
 */
function list(req, res) {
    res.send(200, {'files': []});
    res.end();
}
model.list = list;