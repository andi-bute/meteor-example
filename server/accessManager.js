Players.allow({
    update: function (userId, doc, fields, modifier) {
        // can only change your own documents
        if (fields.length === 1 && fields[0] === 'score') {
            return true;
        }
        else {
            return false;
        }
    },
});