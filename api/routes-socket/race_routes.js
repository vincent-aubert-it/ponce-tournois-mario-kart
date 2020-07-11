const race_ctrl = require('../controllers/race_ctrl');

module.exports = (io, socket, userId, isAdmin) => {
    socket.on('getPonceRaces', (onError) => {
        race_ctrl.getPonceRaces(socket, onError);
    });

    socket.on('addRace', (data, onError) => {
        race_ctrl.addRace(io, socket, onError, data);
    });
};
