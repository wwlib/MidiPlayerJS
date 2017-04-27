'use strict';

var Constants = {
	VERSION: '1.1.0',
	NOTES: []
};

(function () {
	// Builds notes object for reference against binary values.
	var allNotes = [['C'], ['C#', 'Db'], ['D'], ['D#', 'Eb'], ['E'], ['F'], ['F#', 'Gb'], ['G'], ['G#', 'Ab'], ['A'], ['A#', 'Bb'], ['B']];
	var counter = 0;

	// All available octaves.

	var _loop = function _loop(i) {
		allNotes.forEach(function (noteGroup) {
			noteGroup.forEach(function (note) {
				return Constants.NOTES[counter] = note + i;
			});
			counter++;
		});
	};

	for (var i = -1; i <= 9; i++) {
		_loop(i);
	}
})();

exports.Constants = Constants;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsiQ29uc3RhbnRzIiwiVkVSU0lPTiIsIk5PVEVTIiwiYWxsTm90ZXMiLCJjb3VudGVyIiwiaSIsImZvckVhY2giLCJub3RlR3JvdXAiLCJub3RlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxZQUFZO0FBQ2ZDLFVBQVMsT0FETTtBQUVmQyxRQUFPO0FBRlEsQ0FBaEI7O0FBS0EsQ0FBQyxZQUFXO0FBQ1g7QUFDQSxLQUFJQyxXQUFXLENBQUMsQ0FBQyxHQUFELENBQUQsRUFBUSxDQUFDLElBQUQsRUFBTSxJQUFOLENBQVIsRUFBcUIsQ0FBQyxHQUFELENBQXJCLEVBQTRCLENBQUMsSUFBRCxFQUFNLElBQU4sQ0FBNUIsRUFBeUMsQ0FBQyxHQUFELENBQXpDLEVBQStDLENBQUMsR0FBRCxDQUEvQyxFQUFzRCxDQUFDLElBQUQsRUFBTSxJQUFOLENBQXRELEVBQW1FLENBQUMsR0FBRCxDQUFuRSxFQUEwRSxDQUFDLElBQUQsRUFBTSxJQUFOLENBQTFFLEVBQXVGLENBQUMsR0FBRCxDQUF2RixFQUE4RixDQUFDLElBQUQsRUFBTSxJQUFOLENBQTlGLEVBQTJHLENBQUMsR0FBRCxDQUEzRyxDQUFmO0FBQ0EsS0FBSUMsVUFBVSxDQUFkOztBQUVBOztBQUxXLDRCQU1GQyxDQU5FO0FBT1ZGLFdBQVNHLE9BQVQsQ0FBaUIscUJBQWE7QUFDN0JDLGFBQVVELE9BQVYsQ0FBa0I7QUFBQSxXQUFRTixVQUFVRSxLQUFWLENBQWdCRSxPQUFoQixJQUEyQkksT0FBT0gsQ0FBMUM7QUFBQSxJQUFsQjtBQUNBRDtBQUNBLEdBSEQ7QUFQVTs7QUFNWCxNQUFLLElBQUlDLElBQUksQ0FBQyxDQUFkLEVBQWlCQSxLQUFLLENBQXRCLEVBQXlCQSxHQUF6QixFQUE4QjtBQUFBLFFBQXJCQSxDQUFxQjtBQUs3QjtBQUNELENBWkQ7O0FBY0FJLFFBQVFULFNBQVIsR0FBb0JBLFNBQXBCIiwiZmlsZSI6ImNvbnN0YW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDb25zdGFudHMgPSB7XG5cdFZFUlNJT046ICcxLjEuMCcsXG5cdE5PVEVTOiBbXVxufTtcblxuKGZ1bmN0aW9uKCkge1xuXHQvLyBCdWlsZHMgbm90ZXMgb2JqZWN0IGZvciByZWZlcmVuY2UgYWdhaW5zdCBiaW5hcnkgdmFsdWVzLlxuXHR2YXIgYWxsTm90ZXMgPSBbWydDJ10sIFsnQyMnLCdEYiddLCBbJ0QnXSwgWydEIycsJ0ViJ10sIFsnRSddLFsnRiddLCBbJ0YjJywnR2InXSwgWydHJ10sIFsnRyMnLCdBYiddLCBbJ0EnXSwgWydBIycsJ0JiJ10sIFsnQiddXTtcblx0dmFyIGNvdW50ZXIgPSAwO1xuXG5cdC8vIEFsbCBhdmFpbGFibGUgb2N0YXZlcy5cblx0Zm9yIChsZXQgaSA9IC0xOyBpIDw9IDk7IGkrKykge1xuXHRcdGFsbE5vdGVzLmZvckVhY2gobm90ZUdyb3VwID0+IHtcblx0XHRcdG5vdGVHcm91cC5mb3JFYWNoKG5vdGUgPT4gQ29uc3RhbnRzLk5PVEVTW2NvdW50ZXJdID0gbm90ZSArIGkpO1xuXHRcdFx0Y291bnRlciArKztcblx0XHR9KTtcblx0fVxufSkoKTtcblxuZXhwb3J0cy5Db25zdGFudHMgPSBDb25zdGFudHM7Il19
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
	function Player(eventHandler, buffer) {
		_classCallCheck(this, Player);

		this.sampleRate = 5; // milliseconds
		this.startTime = 0;
		this.buffer = buffer || null;
		this.division;
		this.format;
		this.setIntervalId = null;
		this.tracks = [];
		this.tempo = 120;
		this.startTick = 0;
		this.tick = 0;
		this.lastTick = null;
		this.inLoop = false;
		this.totalTicks = 0;
		this.events = [];
		this.eventListeners = {};
		this.externalTimeSource = null;
		this.markersToLyrics = false;

		if (typeof eventHandler === 'function') this.on('midiEvent', eventHandler);
	}

	_createClass(Player, [{
		key: 'setExternalTimeSource',
		value: function setExternalTimeSource(source) {
			this.externalTimeSource = source;
		}
	}, {
		key: 'setMarkersToLyrics',
		value: function setMarkersToLyrics(value) {
			this.markersToLyrics = value;
			if (this.tracks) {
				this.tracks.forEach(function (track) {
					track.setMarkersToLyrics(value);
				});
			}
		}

		// Only for NodeJS

	}, {
		key: 'loadFile',
		value: function loadFile(path) {
			var fs = require('fs');
			this.buffer = fs.readFileSync(path);
			return this.fileLoaded();
		}
	}, {
		key: 'loadArrayBuffer',
		value: function loadArrayBuffer(arrayBuffer) {
			this.buffer = new Uint8Array(arrayBuffer);
			return this.fileLoaded();
		}
	}, {
		key: 'loadDataUri',
		value: function loadDataUri(dataUri) {
			// convert base64 to raw binary data held in a string
			// doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
			var byteString = Utils.atob(dataUri.split(',')[1]);

			// write the bytes of the string to an ArrayBuffer
			var ia = new Uint8Array(byteString.length);
			for (var i = 0; i < byteString.length; i++) {
				ia[i] = byteString.charCodeAt(i);
			}

			this.buffer = ia;
			return this.fileLoaded();
		}
	}, {
		key: 'getFilesize',
		value: function getFilesize() {
			return this.buffer ? this.buffer.length : 0;
		}
	}, {
		key: 'fileLoaded',
		value: function fileLoaded() {
			if (!this.validate()) throw 'Invalid MIDI file; should start with MThd';
			return this.getDivision().getFormat().getTracks().dryRun();
		}

		// First four bytes should be MThd

	}, {
		key: 'validate',
		value: function validate() {
			return Utils.bytesToLetters(this.buffer.slice(0, 4)) === 'MThd';
		}
	}, {
		key: 'getFormat',
		value: function getFormat() {
			/*
   MIDI files come in 3 variations:
   Format 0 which contain a single track
   Format 1 which contain one or more simultaneous tracks
   (ie all tracks are to be played simultaneously).
   Format 2 which contain one or more independant tracks
   (ie each track is to be played independantly of the others).
   return Utils.bytesToNumber(this.buffer.slice(8, 10));
   */

			this.format = Utils.bytesToNumber(this.buffer.slice(8, 10));
			return this;
		}

		// Parses out tracks and places them in this.tracks and initializes this.pointers

	}, {
		key: 'getTracks',
		value: function getTracks() {
			this.tracks = [];
			this.buffer.forEach(function (byte, index) {
				if (Utils.bytesToLetters(this.buffer.slice(index, index + 4)) == 'MTrk') {
					var trackLength = Utils.bytesToNumber(this.buffer.slice(index + 4, index + 8));
					var track = new Track(this.tracks.length, this.buffer.slice(index + 8, index + 8 + trackLength));
					track.setMarkersToLyrics(this.markersToLyrics);
					this.tracks.push(track);
				}
			}, this);

			return this;
		}
	}, {
		key: 'enableTrack',
		value: function enableTrack(trackNumber) {
			this.tracks[trackNumber - 1].enable();
			return this;
		}
	}, {
		key: 'disableTrack',
		value: function disableTrack(trackNumber) {
			this.tracks[trackNumber - 1].disable();
			return this;
		}
	}, {
		key: 'getDivision',
		value: function getDivision() {
			this.division = Utils.bytesToNumber(this.buffer.slice(12, 14));
			return this;
		}
	}, {
		key: 'playLoop',
		value: function playLoop(dryRun) {
			if (!this.inLoop) {
				this.inLoop = true;
				this.tick = this.getCurrentTick();

				this.tracks.forEach(function (track) {
					// Handle next event
					if (!dryRun && this.endOfFile()) {
						this.triggerPlayerEvent('endOfFile');
						this.stop();
					} else {
						var event = track.handleEvent(this.tick, dryRun);
						if (event && !dryRun) this.emitEvent(event);
					}
				}, this);

				if (!dryRun) this.triggerPlayerEvent('playing', { tick: this.tick });
				this.inLoop = false;
			}

			//window.requestAnimationFrame(this.playLoop.bind(this));
		}
	}, {
		key: 'setStartTime',
		value: function setStartTime(startTime) {
			this.startTime = startTime;
			console.log('MidiPlayer.js: setStartTime: ' + this.startTime);
		}
	}, {
		key: 'play',
		value: function play() {
			if (this.setIntervalId) {
				console.log('Already playing...');
				return false;
			}

			// Initialize
			if (!this.startTime) {
				this.startTime = this.externalTimeSource ? this.externalTimeSource() : new Date().getTime();
			}

			// Start play loop
			//window.requestAnimationFrame(this.playLoop.bind(this));
			this.setIntervalId = setInterval(this.playLoop.bind(this), this.sampleRate);

			return this;
		}
	}, {
		key: 'pause',
		value: function pause() {
			clearInterval(this.setIntervalId);
			this.setIntervalId = false;
			this.startTick = this.tick;
			this.startTime = 0;
			return this;
		}
	}, {
		key: 'stop',
		value: function stop() {
			clearInterval(this.setIntervalId);
			this.setIntervalId = false;
			this.startTick = 0;
			this.startTime = 0;
			this.resetTracks();
			return this;
		}
	}, {
		key: 'isPlaying',
		value: function isPlaying() {
			return this.setIntervalId > 0;
		}
	}, {
		key: 'dryRun',
		value: function dryRun() {
			// Reset tracks first
			this.resetTracks();
			while (!this.endOfFile()) {
				this.playLoop(true);
			}this.events = this.getEvents();
			this.totalTicks = this.getTotalTicks();
			this.startTick = 0;
			this.startTime = 0;

			// Leave tracks in pristine condish
			this.resetTracks();
			//console.log('Song time: ' + this.getSongTime() + ' seconds / ' + this.totalTicks + ' ticks.');

			this.triggerPlayerEvent('fileLoaded', this);
			return this;
		}
	}, {
		key: 'resetTracks',
		value: function resetTracks() {
			this.tracks.forEach(function (track) {
				return track.reset();
			});
		}
	}, {
		key: 'getEvents',
		value: function getEvents() {
			return this.tracks.map(function (track) {
				return track.events;
			});
		}
	}, {
		key: 'getTotalTicks',
		value: function getTotalTicks() {
			return Math.max.apply(null, this.tracks.map(function (track) {
				return track.delta;
			}));
		}
	}, {
		key: 'getSongTime',
		value: function getSongTime() {
			return this.totalTicks / this.division / this.tempo * 60;
		}
	}, {
		key: 'getSongTimeRemaining',
		value: function getSongTimeRemaining() {
			return Math.round((this.totalTicks - this.tick) / this.division / this.tempo * 60);
		}
	}, {
		key: 'getSongPercentRemaining',
		value: function getSongPercentRemaining() {
			return Math.round(this.getSongTimeRemaining() / this.getSongTime() * 100);
		}
	}, {
		key: 'bytesProcessed',
		value: function bytesProcessed() {
			// Currently assume header chunk is strictly 14 bytes
			return 14 + this.tracks.length * 8 + this.tracks.reduce(function (a, b) {
				return { pointer: a.pointer + b.pointer };
			}, { pointer: 0 }).pointer;
		}
	}, {
		key: 'endOfFile',
		value: function endOfFile() {
			return this.bytesProcessed() == this.buffer.length;
		}
	}, {
		key: 'getCurrentTick',
		value: function getCurrentTick() {
			var currentTime = this.externalTimeSource ? this.externalTimeSource() : new Date().getTime();
			return Math.round((currentTime - this.startTime) / 1000 * (this.division * (this.tempo / 60))) + this.startTick;
		}
	}, {
		key: 'emitEvent',
		value: function emitEvent(event) {
			// Grab tempo if available.
			if (event.hasOwnProperty('name') && event.name === 'Set Tempo') this.tempo = event.data;
			this.triggerPlayerEvent('midiEvent', event);
		}
	}, {
		key: 'on',
		value: function on(playerEvent, fn) {
			if (!this.eventListeners.hasOwnProperty(playerEvent)) this.eventListeners[playerEvent] = [];
			this.eventListeners[playerEvent].push(fn);
			return this;
		}
	}, {
		key: 'triggerPlayerEvent',
		value: function triggerPlayerEvent(playerEvent, data) {
			if (this.eventListeners.hasOwnProperty(playerEvent)) this.eventListeners[playerEvent].forEach(function (fn) {
				return fn(data || {});
			});
			return this;
		}
	}]);

	return Player;
}();

exports.Player = Player;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbGF5ZXIuanMiXSwibmFtZXMiOlsiUGxheWVyIiwiZXZlbnRIYW5kbGVyIiwiYnVmZmVyIiwic2FtcGxlUmF0ZSIsInN0YXJ0VGltZSIsImRpdmlzaW9uIiwiZm9ybWF0Iiwic2V0SW50ZXJ2YWxJZCIsInRyYWNrcyIsInRlbXBvIiwic3RhcnRUaWNrIiwidGljayIsImxhc3RUaWNrIiwiaW5Mb29wIiwidG90YWxUaWNrcyIsImV2ZW50cyIsImV2ZW50TGlzdGVuZXJzIiwiZXh0ZXJuYWxUaW1lU291cmNlIiwibWFya2Vyc1RvTHlyaWNzIiwib24iLCJzb3VyY2UiLCJ2YWx1ZSIsImZvckVhY2giLCJ0cmFjayIsInNldE1hcmtlcnNUb0x5cmljcyIsInBhdGgiLCJmcyIsInJlcXVpcmUiLCJyZWFkRmlsZVN5bmMiLCJmaWxlTG9hZGVkIiwiYXJyYXlCdWZmZXIiLCJVaW50OEFycmF5IiwiZGF0YVVyaSIsImJ5dGVTdHJpbmciLCJVdGlscyIsImF0b2IiLCJzcGxpdCIsImlhIiwibGVuZ3RoIiwiaSIsImNoYXJDb2RlQXQiLCJ2YWxpZGF0ZSIsImdldERpdmlzaW9uIiwiZ2V0Rm9ybWF0IiwiZ2V0VHJhY2tzIiwiZHJ5UnVuIiwiYnl0ZXNUb0xldHRlcnMiLCJzbGljZSIsImJ5dGVzVG9OdW1iZXIiLCJieXRlIiwiaW5kZXgiLCJ0cmFja0xlbmd0aCIsIlRyYWNrIiwicHVzaCIsInRyYWNrTnVtYmVyIiwiZW5hYmxlIiwiZGlzYWJsZSIsImdldEN1cnJlbnRUaWNrIiwiZW5kT2ZGaWxlIiwidHJpZ2dlclBsYXllckV2ZW50Iiwic3RvcCIsImV2ZW50IiwiaGFuZGxlRXZlbnQiLCJlbWl0RXZlbnQiLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsImdldFRpbWUiLCJzZXRJbnRlcnZhbCIsInBsYXlMb29wIiwiYmluZCIsImNsZWFySW50ZXJ2YWwiLCJyZXNldFRyYWNrcyIsImdldEV2ZW50cyIsImdldFRvdGFsVGlja3MiLCJyZXNldCIsIm1hcCIsIk1hdGgiLCJtYXgiLCJhcHBseSIsImRlbHRhIiwicm91bmQiLCJnZXRTb25nVGltZVJlbWFpbmluZyIsImdldFNvbmdUaW1lIiwicmVkdWNlIiwiYSIsImIiLCJwb2ludGVyIiwiYnl0ZXNQcm9jZXNzZWQiLCJjdXJyZW50VGltZSIsImhhc093blByb3BlcnR5IiwibmFtZSIsImRhdGEiLCJwbGF5ZXJFdmVudCIsImZuIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU1BLE07QUFDTCxpQkFBWUMsWUFBWixFQUEwQkMsTUFBMUIsRUFBa0M7QUFBQTs7QUFDakMsT0FBS0MsVUFBTCxHQUFrQixDQUFsQixDQURpQyxDQUNaO0FBQ3JCLE9BQUtDLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxPQUFLRixNQUFMLEdBQWNBLFVBQVUsSUFBeEI7QUFDQSxPQUFLRyxRQUFMO0FBQ0EsT0FBS0MsTUFBTDtBQUNBLE9BQUtDLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxPQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNBLE9BQUtDLEtBQUwsR0FBYSxHQUFiO0FBQ0EsT0FBS0MsU0FBTCxHQUFpQixDQUFqQjtBQUNBLE9BQUtDLElBQUwsR0FBWSxDQUFaO0FBQ0EsT0FBS0MsUUFBTCxHQUFnQixJQUFoQjtBQUNBLE9BQUtDLE1BQUwsR0FBYyxLQUFkO0FBQ0EsT0FBS0MsVUFBTCxHQUFrQixDQUFsQjtBQUNBLE9BQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0EsT0FBS0MsY0FBTCxHQUFzQixFQUF0QjtBQUNBLE9BQUtDLGtCQUFMLEdBQTBCLElBQTFCO0FBQ0EsT0FBS0MsZUFBTCxHQUF1QixLQUF2Qjs7QUFFQSxNQUFJLE9BQU9qQixZQUFQLEtBQXlCLFVBQTdCLEVBQXlDLEtBQUtrQixFQUFMLENBQVEsV0FBUixFQUFxQmxCLFlBQXJCO0FBQ3pDOzs7O3dDQUVxQm1CLE0sRUFBUTtBQUM3QixRQUFLSCxrQkFBTCxHQUEwQkcsTUFBMUI7QUFDQTs7O3FDQUVrQkMsSyxFQUFPO0FBQ3pCLFFBQUtILGVBQUwsR0FBdUJH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QUFKLEVBQXFELEtBQUs3RSxjQUFMLENBQW9CNkUsV0FBcEIsRUFBaUN2RSxPQUFqQyxDQUF5QztBQUFBLFdBQU13RSxHQUFHRixRQUFRLEVBQVgsQ0FBTjtBQUFBLElBQXpDO0FBQ3JELFVBQU8sSUFBUDtBQUNBOzs7Ozs7QUFJRkcsUUFBUS9GLE1BQVIsR0FBaUJBLE1BQWpCIiwiZmlsZSI6InBsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBsYXllciB7XG5cdGNvbnN0cnVjdG9yKGV2ZW50SGFuZGxlciwgYnVmZmVyKSB7XG5cdFx0dGhpcy5zYW1wbGVSYXRlID0gNTsgLy8gbWlsbGlzZWNvbmRzXG5cdFx0dGhpcy5zdGFydFRpbWUgPSAwO1xuXHRcdHRoaXMuYnVmZmVyID0gYnVmZmVyIHx8IG51bGw7XG5cdFx0dGhpcy5kaXZpc2lvbjtcblx0XHR0aGlzLmZvcm1hdDtcblx0XHR0aGlzLnNldEludGVydmFsSWQgPSBudWxsO1xuXHRcdHRoaXMudHJhY2tzID0gW107XG5cdFx0dGhpcy50ZW1wbyA9IDEyMDtcblx0XHR0aGlzLnN0YXJ0VGljayA9IDA7XG5cdFx0dGhpcy50aWNrID0gMDtcblx0XHR0aGlzLmxhc3RUaWNrID0gbnVsbDtcblx0XHR0aGlzLmluTG9vcCA9IGZhbHNlO1xuXHRcdHRoaXMudG90YWxUaWNrcyA9IDA7XG5cdFx0dGhpcy5ldmVudHMgPSBbXTtcblx0XHR0aGlzLmV2ZW50TGlzdGVuZXJzID0ge307XG5cdFx0dGhpcy5leHRlcm5hbFRpbWVTb3VyY2UgPSBudWxsO1xuXHRcdHRoaXMubWFya2Vyc1RvTHlyaWNzID0gZmFsc2U7XG5cblx0XHRpZiAodHlwZW9mKGV2ZW50SGFuZGxlcikgPT09ICdmdW5jdGlvbicpIHRoaXMub24oJ21pZGlFdmVudCcsIGV2ZW50SGFuZGxlcik7XG5cdH1cblxuXHRzZXRFeHRlcm5hbFRpbWVTb3VyY2Uoc291cmNlKSB7XG5cdFx0dGhpcy5leHRlcm5hbFRpbWVTb3VyY2UgPSBzb3VyY2U7XG5cdH1cblxuXHRzZXRNYXJrZXJzVG9MeXJpY3ModmFsdWUpIHtcblx0XHR0aGlzLm1hcmtlcnNUb0x5cmljcyA9IHZhbHVlO1xuXHRcdGlmICh0aGlzLnRyYWNrcykge1xuXHRcdFx0dGhpcy50cmFja3MuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xuXHRcdFx0XHR0cmFjay5zZXRNYXJrZXJzVG9MeXJpY3ModmFsdWUpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gT25seSBmb3IgTm9kZUpTXG5cdGxvYWRGaWxlKHBhdGgpIHtcblx0XHR2YXIgZnMgPSByZXF1aXJlKCdmcycpO1xuXHRcdHRoaXMuYnVmZmVyID0gZnMucmVhZEZpbGVTeW5jKHBhdGgpO1xuXHRcdHJldHVybiB0aGlzLmZpbGVMb2FkZWQoKTtcblx0fVxuXG5cdGxvYWRBcnJheUJ1ZmZlcihhcnJheUJ1ZmZlcikge1xuXHRcdHRoaXMuYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpO1xuXHRcdHJldHVybiB0aGlzLmZpbGVMb2FkZWQoKTtcblx0fVxuXG5cdGxvYWREYXRhVXJpKGRhdGFVcmkpIHtcblx0XHQvLyBjb252ZXJ0IGJhc2U2NCB0byByYXcgYmluYXJ5IGRhdGEgaGVsZCBpbiBhIHN0cmluZ1xuXHRcdC8vIGRvZXNuJ3QgaGFuZGxlIFVSTEVuY29kZWQgRGF0YVVSSXMgLSBzZWUgU08gYW5zd2VyICM2ODUwMjc2IGZvciBjb2RlIHRoYXQgZG9lcyB0aGlzXG5cdFx0dmFyIGJ5dGVTdHJpbmcgPSBVdGlscy5hdG9iKGRhdGFVcmkuc3BsaXQoJywnKVsxXSk7XG5cblx0XHQvLyB3cml0ZSB0aGUgYnl0ZXMgb2YgdGhlIHN0cmluZyB0byBhbiBBcnJheUJ1ZmZlclxuXHRcdHZhciBpYSA9IG5ldyBVaW50OEFycmF5KGJ5dGVTdHJpbmcubGVuZ3RoKTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVTdHJpbmcubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlhW2ldID0gYnl0ZVN0cmluZy5jaGFyQ29kZUF0KGkpO1xuXHRcdH1cblxuXHRcdHRoaXMuYnVmZmVyID0gaWE7XG5cdFx0cmV0dXJuIHRoaXMuZmlsZUxvYWRlZCgpO1xuXHR9XG5cblx0Z2V0RmlsZXNpemUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYnVmZmVyID8gdGhpcy5idWZmZXIubGVuZ3RoIDogMDtcblx0fVxuXG5cdGZpbGVMb2FkZWQoKSB7XG5cdFx0aWYgKCF0aGlzLnZhbGlkYXRlKCkpIHRocm93ICdJbnZhbGlkIE1JREkgZmlsZTsgc2hvdWxkIHN0YXJ0IHdpdGggTVRoZCc7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0RGl2aXNpb24oKS5nZXRGb3JtYXQoKS5nZXRUcmFja3MoKS5kcnlSdW4oKTtcblx0fVxuXG5cdC8vIEZpcnN0IGZvdXIgYnl0ZXMgc2hvdWxkIGJlIE1UaGRcblx0dmFsaWRhdGUoKSB7XG5cdFx0cmV0dXJuIFV0aWxzLmJ5dGVzVG9MZXR0ZXJzKHRoaXMuYnVmZmVyLnNsaWNlKDAsIDQpKSA9PT0gJ01UaGQnO1xuXHR9XG5cblx0Z2V0Rm9ybWF0KCkge1xuXHRcdC8qXG5cdFx0TUlESSBmaWxlcyBjb21lIGluIDMgdmFyaWF0aW9uczpcblx0XHRGb3JtYXQgMCB3aGljaCBjb250YWluIGEgc2luZ2xlIHRyYWNrXG5cdFx0Rm9ybWF0IDEgd2hpY2ggY29udGFpbiBvbmUgb3IgbW9yZSBzaW11bHRhbmVvdXMgdHJhY2tzXG5cdFx0KGllIGFsbCB0cmFja3MgYXJlIHRvIGJlIHBsYXllZCBzaW11bHRhbmVvdXNseSkuXG5cdFx0Rm9ybWF0IDIgd2hpY2ggY29udGFpbiBvbmUgb3IgbW9yZSBpbmRlcGVuZGFudCB0cmFja3Ncblx0XHQoaWUgZWFjaCB0cmFjayBpcyB0byBiZSBwbGF5ZWQgaW5kZXBlbmRhbnRseSBvZiB0aGUgb3RoZXJzKS5cblx0XHRyZXR1cm4gVXRpbHMuYnl0ZXNUb051bWJlcih0aGlzLmJ1ZmZlci5zbGljZSg4LCAxMCkpO1xuXHRcdCovXG5cblx0XHR0aGlzLmZvcm1hdCA9IFV0aWxzLmJ5dGVzVG9OdW1iZXIodGhpcy5idWZmZXIuc2xpY2UoOCwgMTApKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8vIFBhcnNlcyBvdXQgdHJhY2tzIGFuZCBwbGFjZXMgdGhlbSBpbiB0aGlzLnRyYWNrcyBhbmQgaW5pdGlhbGl6ZXMgdGhpcy5wb2ludGVyc1xuXHRnZXRUcmFja3MoKSB7XG5cdFx0dGhpcy50cmFja3MgPSBbXTtcblx0XHR0aGlzLmJ1ZmZlci5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGUsIGluZGV4KSB7XG5cdFx0XHRpZiAoVXRpbHMuYnl0ZXNUb0xldHRlcnModGhpcy5idWZmZXIuc2xpY2UoaW5kZXgsIGluZGV4ICsgNCkpID09ICdNVHJrJykge1xuXHRcdFx0XHR2YXIgdHJhY2tMZW5ndGggPSBVdGlscy5ieXRlc1RvTnVtYmVyKHRoaXMuYnVmZmVyLnNsaWNlKGluZGV4ICsgNCwgaW5kZXggKyA4KSk7XG5cdFx0XHRcdHZhciB0cmFjayA9IG5ldyBUcmFjayh0aGlzLnRyYWNrcy5sZW5ndGgsIHRoaXMuYnVmZmVyLnNsaWNlKGluZGV4ICsgOCwgaW5kZXggKyA4ICsgdHJhY2tMZW5ndGgpKTtcblx0XHRcdFx0dHJhY2suc2V0TWFya2Vyc1RvTHlyaWNzKHRoaXMubWFya2Vyc1RvTHlyaWNzKTtcblx0XHRcdFx0dGhpcy50cmFja3MucHVzaCh0cmFjayk7XG5cdFx0XHR9XG5cdFx0fSwgdGhpcyk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGVuYWJsZVRyYWNrKHRyYWNrTnVtYmVyKSB7XG5cdFx0dGhpcy50cmFja3NbdHJhY2tOdW1iZXIgLSAxXS5lbmFibGUoKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGRpc2FibGVUcmFjayh0cmFja051bWJlcikge1xuXHRcdHRoaXMudHJhY2tzW3RyYWNrTnVtYmVyIC0gMV0uZGlzYWJsZSgpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0RGl2aXNpb24oKSB7XG5cdFx0dGhpcy5kaXZpc2lvbiA9IFV0aWxzLmJ5dGVzVG9OdW1iZXIodGhpcy5idWZmZXIuc2xpY2UoMTIsIDE0KSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRwbGF5TG9vcChkcnlSdW4pIHtcblx0XHRpZiAoIXRoaXMuaW5Mb29wKSB7XG5cdFx0XHR0aGlzLmluTG9vcCA9IHRydWU7XG5cdFx0XHR0aGlzLnRpY2sgPSB0aGlzLmdldEN1cnJlbnRUaWNrKCk7XG5cblx0XHRcdHRoaXMudHJhY2tzLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcblx0XHRcdFx0Ly8gSGFuZGxlIG5leHQgZXZlbnRcblx0XHRcdFx0aWYgKCFkcnlSdW4gJiYgdGhpcy5lbmRPZkZpbGUoKSkge1xuXHRcdFx0XHRcdHRoaXMudHJpZ2dlclBsYXllckV2ZW50KCdlbmRPZkZpbGUnKTtcblx0XHRcdFx0XHR0aGlzLnN0b3AoKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhciBldmVudCA9IHRyYWNrLmhhbmRsZUV2ZW50KHRoaXMudGljaywgZHJ5UnVuKTtcblx0XHRcdFx0XHRpZiAoZXZlbnQgJiYgIWRyeVJ1bikgdGhpcy5lbWl0RXZlbnQoZXZlbnQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0sIHRoaXMpO1xuXG5cdFx0XHRpZiAoIWRyeVJ1bikgdGhpcy50cmlnZ2VyUGxheWVyRXZlbnQoJ3BsYXlpbmcnLCB7dGljazogdGhpcy50aWNrfSk7XG5cdFx0XHR0aGlzLmluTG9vcCA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnBsYXlMb29wLmJpbmQodGhpcykpO1xuXHR9XG5cblx0c2V0U3RhcnRUaW1lKHN0YXJ0VGltZSkge1xuXHRcdHRoaXMuc3RhcnRUaW1lID0gc3RhcnRUaW1lO1xuXHRcdGNvbnNvbGUubG9nKGBNaWRpUGxheWVyLmpzOiBzZXRTdGFydFRpbWU6IGAgKyB0aGlzLnN0YXJ0VGltZSk7XG5cdH1cblxuXHRwbGF5KCkge1xuXHRcdGlmICh0aGlzLnNldEludGVydmFsSWQpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdBbHJlYWR5IHBsYXlpbmcuLi4nKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBJbml0aWFsaXplXG5cdFx0aWYgKCF0aGlzLnN0YXJ0VGltZSkge1xuXHRcdFx0dGhpcy5zdGFydFRpbWUgPSB0aGlzLmV4dGVybmFsVGltZVNvdXJjZSA/IHRoaXMuZXh0ZXJuYWxUaW1lU291cmNlKCkgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0XHR9XG5cblx0XHQvLyBTdGFydCBwbGF5IGxvb3Bcblx0XHQvL3dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5wbGF5TG9vcC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnNldEludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh0aGlzLnBsYXlMb29wLmJpbmQodGhpcyksIHRoaXMuc2FtcGxlUmF0ZSk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHBhdXNlKCkge1xuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5zZXRJbnRlcnZhbElkKTtcblx0XHR0aGlzLnNldEludGVydmFsSWQgPSBmYWxzZTtcblx0XHR0aGlzLnN0YXJ0VGljayA9IHRoaXMudGljaztcblx0XHR0aGlzLnN0YXJ0VGltZSA9IDA7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzdG9wKCkge1xuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5zZXRJbnRlcnZhbElkKTtcblx0XHR0aGlzLnNldEludGVydmFsSWQgPSBmYWxzZTtcblx0XHR0aGlzLnN0YXJ0VGljayA9IDA7XG5cdFx0dGhpcy5zdGFydFRpbWUgPSAwO1xuXHRcdHRoaXMucmVzZXRUcmFja3MoKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGlzUGxheWluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRJbnRlcnZhbElkID4gMDtcblx0fVxuXG5cdGRyeVJ1bigpIHtcblx0XHQvLyBSZXNldCB0cmFja3MgZmlyc3Rcblx0XHR0aGlzLnJlc2V0VHJhY2tzKCk7XG5cdFx0d2hpbGUgKCF0aGlzLmVuZE9mRmlsZSgpKSB0aGlzLnBsYXlMb29wKHRydWUpO1xuXHRcdHRoaXMuZXZlbnRzID0gdGhpcy5nZXRFdmVudHMoKTtcblx0XHR0aGlzLnRvdGFsVGlja3MgPSB0aGlzLmdldFRvdGFsVGlja3MoKTtcblx0XHR0aGlzLnN0YXJ0VGljayA9IDA7XG5cdFx0dGhpcy5zdGFydFRpbWUgPSAwO1xuXG5cdFx0Ly8gTGVhdmUgdHJhY2tzIGluIHByaXN0aW5lIGNvbmRpc2hcblx0XHR0aGlzLnJlc2V0VHJhY2tzKCk7XG5cdFx0Ly9jb25zb2xlLmxvZygnU29uZyB0aW1lOiAnICsgdGhpcy5nZXRTb25nVGltZSgpICsgJyBzZWNvbmRzIC8gJyArIHRoaXMudG90YWxUaWNrcyArICcgdGlja3MuJyk7XG5cblx0XHR0aGlzLnRyaWdnZXJQbGF5ZXJFdmVudCgnZmlsZUxvYWRlZCcsIHRoaXMpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0cmVzZXRUcmFja3MoKSB7XG5cdFx0dGhpcy50cmFja3MuZm9yRWFjaCh0cmFjayA9PiB0cmFjay5yZXNldCgpKTtcblx0fVxuXG5cdGdldEV2ZW50cygpIHtcblx0XHRyZXR1cm4gdGhpcy50cmFja3MubWFwKHRyYWNrID0+IHRyYWNrLmV2ZW50cyk7XG5cdH1cblxuXHRnZXRUb3RhbFRpY2tzKCkge1xuXHRcdHJldHVybiBNYXRoLm1heC5hcHBseShudWxsLCB0aGlzLnRyYWNrcy5tYXAoKHRyYWNrKSA9PiB0cmFjay5kZWx0YSkpO1xuXHR9XG5cblx0Z2V0U29uZ1RpbWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMudG90YWxUaWNrcyAvIHRoaXMuZGl2aXNpb24gLyB0aGlzLnRlbXBvICogNjA7XG5cdH1cblxuXHRnZXRTb25nVGltZVJlbWFpbmluZygpIHtcblx0XHRyZXR1cm4gTWF0aC5yb3VuZCgodGhpcy50b3RhbFRpY2tzIC0gdGhpcy50aWNrKSAvIHRoaXMuZGl2aXNpb24gLyB0aGlzLnRlbXBvICogNjApO1xuXHR9XG5cblx0Z2V0U29uZ1BlcmNlbnRSZW1haW5pbmcoKSB7XG5cdFx0cmV0dXJuIE1hdGgucm91bmQodGhpcy5nZXRTb25nVGltZVJlbWFpbmluZygpIC8gdGhpcy5nZXRTb25nVGltZSgpICogMTAwKTtcblx0fVxuXG5cdGJ5dGVzUHJvY2Vzc2VkKCkge1xuXHRcdC8vIEN1cnJlbnRseSBhc3N1bWUgaGVhZGVyIGNodW5rIGlzIHN0cmljdGx5IDE0IGJ5dGVzXG5cdFx0cmV0dXJuIDE0ICsgdGhpcy50cmFja3MubGVuZ3RoICogOCArIHRoaXMudHJhY2tzLnJlZHVjZSgoYSwgYikgPT4ge3JldHVybiB7cG9pbnRlcjogYS5wb2ludGVyICsgYi5wb2ludGVyfX0sIHtwb2ludGVyOiAwfSkucG9pbnRlcjtcblx0fVxuXG5cdGVuZE9mRmlsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5ieXRlc1Byb2Nlc3NlZCgpID09IHRoaXMuYnVmZmVyLmxlbmd0aDtcblx0fVxuXG5cdGdldEN1cnJlbnRUaWNrKCkge1xuXHRcdHZhciBjdXJyZW50VGltZSA9IHRoaXMuZXh0ZXJuYWxUaW1lU291cmNlID8gdGhpcy5leHRlcm5hbFRpbWVTb3VyY2UoKSA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHRcdHJldHVybiBNYXRoLnJvdW5kKChjdXJyZW50VGltZSAtIHRoaXMuc3RhcnRUaW1lKSAvIDEwMDAgKiAodGhpcy5kaXZpc2lvbiAqICh0aGlzLnRlbXBvIC8gNjApKSkgKyB0aGlzLnN0YXJ0VGljaztcblx0fVxuXG5cdGVtaXRFdmVudChldmVudCkge1xuXHRcdC8vIEdyYWIgdGVtcG8gaWYgYXZhaWxhYmxlLlxuXHRcdGlmIChldmVudC5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpICYmIGV2ZW50Lm5hbWUgPT09ICdTZXQgVGVtcG8nKSB0aGlzLnRlbXBvID0gZXZlbnQuZGF0YTtcblx0XHR0aGlzLnRyaWdnZXJQbGF5ZXJFdmVudCgnbWlkaUV2ZW50JywgZXZlbnQpO1xuXHR9XG5cblx0b24ocGxheWVyRXZlbnQsIGZuKSB7XG5cdFx0aWYgKCF0aGlzLmV2ZW50TGlzdGVuZXJzLmhhc093blByb3BlcnR5KHBsYXllckV2ZW50KSkgdGhpcy5ldmVudExpc3RlbmVyc1twbGF5ZXJFdmVudF0gPSBbXTtcblx0XHR0aGlzLmV2ZW50TGlzdGVuZXJzW3BsYXllckV2ZW50XS5wdXNoKGZuKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRyaWdnZXJQbGF5ZXJFdmVudChwbGF5ZXJFdmVudCwgZGF0YSkge1xuXHRcdGlmICh0aGlzLmV2ZW50TGlzdGVuZXJzLmhhc093blByb3BlcnR5KHBsYXllckV2ZW50KSkgdGhpcy5ldmVudExpc3RlbmVyc1twbGF5ZXJFdmVudF0uZm9yRWFjaChmbiA9PiBmbihkYXRhIHx8IHt9KSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxufVxuXG5leHBvcnRzLlBsYXllciA9IFBsYXllcjtcbiJdfQ==
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Track = function () {
	function Track(index, data) {
		_classCallCheck(this, Track);

		this.enabled = true;
		this.pointer = 0;
		this.lastTick = 0;
		this.lastStatus = null;
		this.index = index;
		this.data = data;
		this.delta = 0;
		this.runningDelta = 0;
		this.events = [];
		this.markersToLyrics = false;
	}

	_createClass(Track, [{
		key: 'reset',
		value: function reset() {
			this.enabled = true;
			this.pointer = 0;
			this.lastTick = 0;
			this.lastStatus = null;
			this.delta = 0;
			this.runningDelta = 0;
		}
	}, {
		key: 'enable',
		value: function enable() {
			this.enabled = true;
			return this;
		}
	}, {
		key: 'disable',
		value: function disable() {
			this.enabled = false;
			return this;
		}
	}, {
		key: 'getCurrentByte',
		value: function getCurrentByte() {
			return this.data[this.pointer];
		}
	}, {
		key: 'getDeltaByteCount',
		value: function getDeltaByteCount() {
			// Get byte count of delta VLV
			// http://www.ccarh.org/courses/253/handout/vlv/
			// If byte is greater or equal to 80h (128 decimal) then the next byte
			// is also part of the VLV,
			// else byte is the last byte in a VLV.
			var currentByte = this.getCurrentByte();
			var byteCount = 1;

			while (currentByte >= 128) {
				currentByte = this.data[this.pointer + byteCount];
				byteCount++;
			}

			return byteCount;
		}
	}, {
		key: 'getDelta',
		value: function getDelta() {
			return Utils.readVarInt(this.data.slice(this.pointer, this.pointer + this.getDeltaByteCount()));
		}

		/**
   * Handles event within a given track starting at specified index
   * @param currentTick
   * @param BOOL dryRun If set events will be parsed and returned regardless of time.
   */

	}, {
		key: 'handleEvent',
		value: function handleEvent(currentTick, dryRun) {
			dryRun = dryRun || false;
			if (this.pointer < this.data.length && (dryRun || currentTick - this.lastTick >= this.getDelta())) {
				var _event = this.parseEvent();
				if (this.enabled) return _event;
				// Recursively call this function for each event ahead that has 0 delta time?
			}

			return null;
		}
	}, {
		key: 'getStringData',
		value: function getStringData(eventStartIndex) {
			var currentByte = this.pointer;
			var byteCount = 1;
			// while (currentByte >= 128) {
			// 	currentByte = this.data[this.pointer + byteCount];
			// 	byteCount++;
			// }
			//var vlv = byteCount;
			var length = Utils.readVarInt(this.data.slice(eventStartIndex + 2, eventStartIndex + 2 + byteCount));
			var stringLength = length;

			return Utils.bytesToLetters(this.data.slice(eventStartIndex + byteCount + 2, eventStartIndex + byteCount + length + 2));
		}

		// Parses event into JSON and advances pointer for the track

	}, {
		key: 'parseEvent',
		value: function parseEvent() {
			var eventStartIndex = this.pointer + this.getDeltaByteCount();
			var eventJson = {};
			var deltaByteCount = this.getDeltaByteCount();
			eventJson.track = this.index + 1;
			eventJson.delta = this.getDelta();
			this.lastTick = this.lastTick + eventJson.delta;
			this.runningDelta += eventJson.delta;
			eventJson.tick = this.runningDelta;

			//eventJson.raw = event;
			if (this.data[eventStartIndex] == 0xff) {
				// Meta Event

				// If this is a meta event we should emit the data and immediately move to the next event
				// otherwise if we let it run through the next cycle a slight delay will accumulate if multiple tracks
				// are being played simultaneously

				switch (this.data[eventStartIndex + 1]) {
					case 0x00:
						// Sequence Number
						eventJson.name = 'Sequence Number';
						break;
					case 0x01:
						// Text Event
						eventJson.name = 'Text Event';
						eventJson.string = this.getStringData(eventStartIndex);
						break;
					case 0x02:
						// Copyright Notice
						eventJson.name = 'Copyright Notice';
						break;
					case 0x03:
						// Sequence/Track Name
						eventJson.name = 'Sequence/Track Name';
						eventJson.string = this.getStringData(eventStartIndex);
						break;
					case 0x04:
						// Instrument Name
						eventJson.name = 'Instrument Name';
						eventJson.string = this.getStringData(eventStartIndex);
						break;
					case 0x05:
						// Lyric
						eventJson.name = 'Lyric';
						eventJson.string = this.getStringData(eventStartIndex);
						break;
					case 0x06:
						// Marker
						eventJson.name = 'Marker';
						if (this.markersToLyrics) {
							eventJson.name = 'Lyric';
						}
						eventJson.string = this.getStringData(eventStartIndex);
						break;
					case 0x07:
						// Cue Point
						eventJson.name = 'Cue Point';
						eventJson.string = this.getStringData(eventStartIndex);
						break;
					case 0x09:
						// Device Name
						eventJson.name = 'Device Name';
						eventJson.string = this.getStringData(eventStartIndex);
						break;
					case 0x20:
						// MIDI Channel Prefix
						eventJson.name = 'MIDI Channel Prefix';
						break;
					case 0x21:
						// MIDI Port
						eventJson.name = 'MIDI Port';
						eventJson.data = Utils.bytesToNumber([this.data[eventStartIndex + 3]]);
						break;
					case 0x2F:
						// End of Track
						eventJson.name = 'End of Track';
						break;
					case 0x51:
						// Set Tempo
						eventJson.name = 'Set Tempo';
						eventJson.data = Math.round(60000000 / Utils.bytesToNumber(this.data.slice(eventStartIndex + 3, eventStartIndex + 6)));
						this.tempo = eventJson.data;
						break;
					case 0x54:
						// SMTPE Offset
						eventJson.name = 'SMTPE Offset';
						break;
					case 0x58:
						// Time Signature
						eventJson.name = 'Time Signature';
						break;
					case 0x59:
						// Key Signature
						eventJson.name = 'Key Signature';
						break;
					case 0x7F:
						// Sequencer-Specific Meta-event
						eventJson.name = 'Sequencer-Specific Meta-event';
						break;
					default:
						eventJson.name = 'Unknown: ' + this.data[eventStartIndex + 1].toString(16);
						break;
				}

				var length = this.data[this.pointer + deltaByteCount + 2];
				// Some meta events will have vlv that needs to be handled

				this.pointer += deltaByteCount + 3 + length;
			} else if (this.data[eventStartIndex] == 0xf0) {
				// Sysex
				eventJson.name = 'Sysex';
				var length = this.data[this.pointer + deltaByteCount + 1];
				this.pointer += deltaByteCount + 2 + length;
			} else {
				// Voice event
				if (this.data[eventStartIndex] < 0x80) {
					// Running status
					eventJson.running = true;
					eventJson.noteNumber = this.data[eventStartIndex];
					eventJson.noteName = Constants.NOTES[this.data[eventStartIndex]];
					eventJson.velocity = this.data[eventStartIndex + 1];

					if (this.lastStatus <= 0x8f) {
						eventJson.name = 'Note off';
						eventJson.channel = this.lastStatus - 0x80 + 1;
					} else if (this.lastStatus <= 0x9f) {
						eventJson.name = 'Note on';
						eventJson.channel = this.lastStatus - 0x90 + 1;
					}

					this.pointer += deltaByteCount + 2;
				} else {
					this.lastStatus = this.data[eventStartIndex];

					if (this.data[eventStartIndex] <= 0x8f) {
						// Note off
						eventJson.name = 'Note off';
						eventJson.channel = this.lastStatus - 0x80 + 1;
						eventJson.noteNumber = this.data[eventStartIndex + 1];
						eventJson.noteName = Constants.NOTES[this.data[eventStartIndex + 1]];
						eventJson.velocity = Math.round(this.data[eventStartIndex + 2] / 127 * 100);
						this.pointer += deltaByteCount + 3;
					} else if (this.data[eventStartIndex] <= 0x9f) {
						// Note on
						eventJson.name = 'Note on';
						eventJson.channel = this.lastStatus - 0x90 + 1;
						eventJson.noteNumber = this.data[eventStartIndex + 1];
						eventJson.noteName = Constants.NOTES[this.data[eventStartIndex + 1]];
						eventJson.velocity = Math.round(this.data[eventStartIndex + 2] / 127 * 100);
						this.pointer += deltaByteCount + 3;
					} else if (this.data[eventStartIndex] <= 0xaf) {
						// Polyphonic Key Pressure
						eventJson.name = 'Polyphonic Key Pressure';
						eventJson.channel = this.lastStatus - 0xa0 + 1;
						eventJson.note = Constants.NOTES[this.data[eventStartIndex + 1]];
						eventJson.pressure = event[2];
						this.pointer += deltaByteCount + 3;
					} else if (this.data[eventStartIndex] <= 0xbf) {
						// Controller Change
						eventJson.name = 'Controller Change';
						eventJson.channel = this.lastStatus - 0xb0 + 1;
						eventJson.number = this.data[eventStartIndex + 1];
						eventJson.value = this.data[eventStartIndex + 2];
						this.pointer += deltaByteCount + 3;
					} else if (this.data[eventStartIndex] <= 0xcf) {
						// Program Change
						eventJson.name = 'Program Change';
						eventJson.channel = this.lastStatus - 0xc0 + 1;
						this.pointer += deltaByteCount + 2;
					} else if (this.data[eventStartIndex] <= 0xdf) {
						// Channel Key Pressure
						eventJson.name = 'Channel Key Pressure';
						eventJson.channel = this.lastStatus - 0xd0 + 1;
						this.pointer += deltaByteCount + 2;
					} else if (this.data[eventStartIndex] <= 0xef) {
						// Pitch Bend
						eventJson.name = 'Pitch Bend';
						eventJson.channel = this.lastStatus - 0xe0 + 1;
						this.pointer += deltaByteCount + 3;
					} else {
						eventJson.name = 'Unknown.  Pointer: ' + this.pointer.toString() + ' ' + eventStartIndex.toString() + ' ' + this.data.length;
					}
				}
			}

			this.delta += eventJson.delta;
			this.events.push(eventJson);

			return eventJson;
		}
	}, {
		key: 'endOfTrack',
		value: function endOfTrack() {
			if (this.data[this.pointer + 1] == 0xff && this.data[this.pointer + 2] == 0x2f && this.data[this.pointer + 3] == 0x00) {
				return true;
			}

			return false;
		}
	}, {
		key: 'setMarkersToLyrics',
		value: function setMarkersToLyrics(value) {
			this.markersToLyrics = value;
		}
	}]);

	return Track;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFjay5qcyJdLCJuYW1lcyI6WyJUcmFjayIsImluZGV4IiwiZGF0YSIsImVuYWJsZWQiLCJwb2ludGVyIiwibGFzdFRpY2siLCJsYXN0U3RhdHVzIiwiZGVsdGEiLCJydW5uaW5nRGVsdGEiLCJldmVudHMiLCJtYXJrZXJzVG9MeXJpY3MiLCJjdXJyZW50Qnl0ZSIsImdldEN1cnJlbnRCeXRlIiwiYnl0ZUNvdW50IiwiVXRpbHMiLCJyZWFkVmFySW50Iiwic2xpY2UiLCJnZXREZWx0YUJ5dGVDb3VudCIsImN1cnJlbnRUaWNrIiwiZHJ5UnVuIiwibGVuZ3RoIiwiZ2V0RGVsdGEiLCJldmVudCIsInBhcnNlRXZlbnQiLCJldmVudFN0YXJ0SW5kZXgiLCJzdHJpbmdMZW5ndGgiLCJieXRlc1RvTGV0dGVycyIsImV2ZW50SnNvbiIsImRlbHRhQnl0ZUNvdW50IiwidHJhY2siLCJ0aWNrIiwibmFtZSIsInN0cmluZyIsImdldFN0cmluZ0RhdGEiLCJieXRlc1RvTnVtYmVyIiwiTWF0aCIsInJvdW5kIiwidGVtcG8iLCJ0b1N0cmluZyIsInJ1bm5pbmciLCJub3RlTnVtYmVyIiwibm90ZU5hbWUiLCJDb25zdGFudHMiLCJOT1RFUyIsInZlbG9jaXR5IiwiY2hhbm5lbCIsIm5vdGUiLCJwcmVzc3VyZSIsIm51bWJlciIsInZhbHVlIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU1BLEs7QUFDTCxnQkFBWUMsS0FBWixFQUFtQkMsSUFBbkIsRUFBeUI7QUFBQTs7QUFDeEIsT0FBS0MsT0FBTCxHQUFlLElBQWY7QUFDQSxPQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLE9BQUtDLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxPQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsT0FBS0wsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsT0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsT0FBS0ssS0FBTCxHQUFhLENBQWI7QUFDQSxPQUFLQyxZQUFMLEdBQW9CLENB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RSxPQUFMLEdBQWUsQ0FBekIsS0FBK0IsSUFBdEUsSUFBOEUsS0FBS0YsSUFBTCxDQUFVLEtBQUtFLE9BQUwsR0FBZSxDQUF6QixLQUErQixJQUFqSCxFQUF1SDtBQUN0SCxXQUFPLElBQVA7QUFDQTs7QUFFRCxVQUFPLEtBQVA7QUFDQTs7O3FDQUVrQjZDLEssRUFBTztBQUN6QixRQUFLdkMsZUFBTCxHQUF1QnVDLEtBQXZCO0FBQ0EiLCJmaWxlIjoidHJhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUcmFja1x0e1xuXHRjb25zdHJ1Y3RvcihpbmRleCwgZGF0YSkge1xuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdFx0dGhpcy5wb2ludGVyID0gMDtcblx0XHR0aGlzLmxhc3RUaWNrID0gMDtcblx0XHR0aGlzLmxhc3RTdGF0dXMgPSBudWxsO1xuXHRcdHRoaXMuaW5kZXggPSBpbmRleDtcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMuZGVsdGEgPSAwO1xuXHRcdHRoaXMucnVubmluZ0RlbHRhID0gMDtcblx0XHR0aGlzLmV2ZW50cyA9IFtdO1xuXHRcdHRoaXMubWFya2Vyc1RvTHlyaWNzID0gZmFsc2U7XG5cdH1cblxuXHRyZXNldCgpIHtcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHRcdHRoaXMucG9pbnRlciA9IDA7XG5cdFx0dGhpcy5sYXN0VGljayA9IDA7XG5cdFx0dGhpcy5sYXN0U3RhdHVzID0gbnVsbDtcblx0XHR0aGlzLmRlbHRhID0gMDtcblx0XHR0aGlzLnJ1bm5pbmdEZWx0YSA9IDA7XG5cdH1cblxuXHRlbmFibGUoKSB7XG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGRpc2FibGUoKSB7XG5cdFx0dGhpcy5lbmFibGVkID0gZmFsc2U7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXRDdXJyZW50Qnl0ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhW3RoaXMucG9pbnRlcl07XG5cdH1cblxuXHRnZXREZWx0YUJ5dGVDb3VudCgpIHtcblx0XHQvLyBHZXQgYnl0ZSBjb3VudCBvZiBkZWx0YSBWTFZcblx0XHQvLyBodHRwOi8vd3d3LmNjYXJoLm9yZy9jb3Vyc2VzLzI1My9oYW5kb3V0L3Zsdi9cblx0XHQvLyBJZiBieXRlIGlzIGdyZWF0ZXIgb3IgZXF1YWwgdG8gODBoICgxMjggZGVjaW1hbCkgdGhlbiB0aGUgbmV4dCBieXRlXG5cdCAgICAvLyBpcyBhbHNvIHBhcnQgb2YgdGhlIFZMVixcblx0ICAgXHQvLyBlbHNlIGJ5dGUgaXMgdGhlIGxhc3QgYnl0ZSBpbiBhIFZMVi5cblx0ICAgXHR2YXIgY3VycmVudEJ5dGUgPSB0aGlzLmdldEN1cnJlbnRCeXRlKCk7XG5cdCAgIFx0dmFyIGJ5dGVDb3VudCA9IDE7XG5cblx0XHR3aGlsZSAoY3VycmVudEJ5dGUgPj0gMTI4KSB7XG5cdFx0XHRjdXJyZW50Qnl0ZSA9IHRoaXMuZGF0YVt0aGlzLnBvaW50ZXIgKyBieXRlQ291bnRdO1xuXHRcdFx0Ynl0ZUNvdW50Kys7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGJ5dGVDb3VudDtcblx0fVxuXG5cdGdldERlbHRhKCkge1xuXHRcdHJldHVybiBVdGlscy5yZWFkVmFySW50KHRoaXMuZGF0YS5zbGljZSh0aGlzLnBvaW50ZXIsIHRoaXMucG9pbnRlciArIHRoaXMuZ2V0RGVsdGFCeXRlQ291bnQoKSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgZXZlbnQgd2l0aGluIGEgZ2l2ZW4gdHJhY2sgc3RhcnRpbmcgYXQgc3BlY2lmaWVkIGluZGV4XG5cdCAqIEBwYXJhbSBjdXJyZW50VGlja1xuXHQgKiBAcGFyYW0gQk9PTCBkcnlSdW4gSWYgc2V0IGV2ZW50cyB3aWxsIGJlIHBhcnNlZCBhbmQgcmV0dXJuZWQgcmVnYXJkbGVzcyBvZiB0aW1lLlxuXHQgKi9cblx0aGFuZGxlRXZlbnQoY3VycmVudFRpY2ssIGRyeVJ1bikge1xuXHRcdGRyeVJ1biA9IGRyeVJ1biB8fCBmYWxzZTtcblx0XHRpZiAodGhpcy5wb2ludGVyIDwgdGhpcy5kYXRhLmxlbmd0aCAmJiAoZHJ5UnVuIHx8IGN1cnJlbnRUaWNrIC0gdGhpcy5sYXN0VGljayA+PSB0aGlzLmdldERlbHRhKCkpKSB7XG5cdFx0XHRsZXQgZXZlbnQgPSB0aGlzLnBhcnNlRXZlbnQoKTtcblx0XHRcdGlmICh0aGlzLmVuYWJsZWQpIHJldHVybiBldmVudDtcblx0XHRcdC8vIFJlY3Vyc2l2ZWx5IGNhbGwgdGhpcyBmdW5jdGlvbiBmb3IgZWFjaCBldmVudCBhaGVhZCB0aGF0IGhhcyAwIGRlbHRhIHRpbWU/XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRnZXRTdHJpbmdEYXRhKGV2ZW50U3RhcnRJbmRleCkge1xuXHRcdHZhciBjdXJyZW50Qnl0ZSA9IHRoaXMucG9pbnRlcjtcblx0XHR2YXIgYnl0ZUNvdW50ID0gMTtcblx0XHQvLyB3aGlsZSAoY3VycmVudEJ5dGUgPj0gMTI4KSB7XG5cdFx0Ly8gXHRjdXJyZW50Qnl0ZSA9IHRoaXMuZGF0YVt0aGlzLnBvaW50ZXIgKyBieXRlQ291bnRdO1xuXHRcdC8vIFx0Ynl0ZUNvdW50Kys7XG5cdFx0Ly8gfVxuXHRcdC8vdmFyIHZsdiA9IGJ5dGVDb3VudDtcblx0XHR2YXIgbGVuZ3RoID0gVXRpbHMucmVhZFZhckludCh0aGlzLmRhdGEuc2xpY2UoZXZlbnRTdGFydEluZGV4ICsgMiwgZXZlbnRTdGFydEluZGV4ICsgMiArIGJ5dGVDb3VudCkpO1xuXHRcdHZhciBzdHJpbmdMZW5ndGggPSBsZW5ndGg7XG5cblx0XHRyZXR1cm4gVXRpbHMuYnl0ZXNUb0xldHRlcnModGhpcy5kYXRhLnNsaWNlKGV2ZW50U3RhcnRJbmRleCArIGJ5dGVDb3VudCArIDIsIGV2ZW50U3RhcnRJbmRleCArIGJ5dGVDb3VudCArIGxlbmd0aCArIDIpKTtcblx0fVxuXG5cdC8vIFBhcnNlcyBldmVudCBpbnRvIEpTT04gYW5kIGFkdmFuY2VzIHBvaW50ZXIgZm9yIHRoZSB0cmFja1xuXHRwYXJzZUV2ZW50KCkge1xuXHRcdHZhciBldmVudFN0YXJ0SW5kZXggPSB0aGlzLnBvaW50ZXIgKyB0aGlzLmdldERlbHRhQnl0ZUNvdW50KCk7XG5cdFx0dmFyIGV2ZW50SnNvbiA9IHt9O1xuXHRcdHZhciBkZWx0YUJ5dGVDb3VudCA9IHRoaXMuZ2V0RGVsdGFCeXRlQ291bnQoKTtcblx0XHRldmVudEpzb24udHJhY2sgPSB0aGlzLmluZGV4ICsgMTtcblx0XHRldmVudEpzb24uZGVsdGEgPSB0aGlzLmdldERlbHRhKCk7XG5cdFx0dGhpcy5sYXN0VGljayA9IHRoaXMubGFzdFRpY2sgKyBldmVudEpzb24uZGVsdGE7XG5cdFx0dGhpcy5ydW5uaW5nRGVsdGEgKz0gZXZlbnRKc29uLmRlbHRhO1xuXHRcdGV2ZW50SnNvbi50aWNrID0gdGhpcy5ydW5uaW5nRGVsdGE7XG5cblx0XHQvL2V2ZW50SnNvbi5yYXcgPSBldmVudDtcblx0XHRpZiAodGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleF0gPT0gMHhmZikge1xuXHRcdFx0Ly8gTWV0YSBFdmVudFxuXG5cdFx0XHQvLyBJZiB0aGlzIGlzIGEgbWV0YSBldmVudCB3ZSBzaG91bGQgZW1pdCB0aGUgZGF0YSBhbmQgaW1tZWRpYXRlbHkgbW92ZSB0byB0aGUgbmV4dCBldmVudFxuXHRcdFx0Ly8gb3RoZXJ3aXNlIGlmIHdlIGxldCBpdCBydW4gdGhyb3VnaCB0aGUgbmV4dCBjeWNsZSBhIHNsaWdodCBkZWxheSB3aWxsIGFjY3VtdWxhdGUgaWYgbXVsdGlwbGUgdHJhY2tzXG5cdFx0XHQvLyBhcmUgYmVpbmcgcGxheWVkIHNpbXVsdGFuZW91c2x5XG5cblx0XHRcdHN3aXRjaCh0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4ICsgMV0pIHtcblx0XHRcdFx0Y2FzZSAweDAwOiAvLyBTZXF1ZW5jZSBOdW1iZXJcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTZXF1ZW5jZSBOdW1iZXInO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDE6IC8vIFRleHQgRXZlbnRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdUZXh0IEV2ZW50Jztcblx0XHRcdFx0XHRldmVudEpzb24uc3RyaW5nID0gdGhpcy5nZXRTdHJpbmdEYXRhKGV2ZW50U3RhcnRJbmRleCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwMjogLy8gQ29weXJpZ2h0IE5vdGljZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0NvcHlyaWdodCBOb3RpY2UnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDM6IC8vIFNlcXVlbmNlL1RyYWNrIE5hbWVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTZXF1ZW5jZS9UcmFjayBOYW1lJztcblx0XHRcdFx0XHRldmVudEpzb24uc3RyaW5nID0gdGhpcy5nZXRTdHJpbmdEYXRhKGV2ZW50U3RhcnRJbmRleCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwNDogLy8gSW5zdHJ1bWVudCBOYW1lXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnSW5zdHJ1bWVudCBOYW1lJztcblx0XHRcdFx0XHRldmVudEpzb24uc3RyaW5nID0gdGhpcy5nZXRTdHJpbmdEYXRhKGV2ZW50U3RhcnRJbmRleCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwNTogLy8gTHlyaWNcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdMeXJpYyc7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nRGF0YShldmVudFN0YXJ0SW5kZXgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDY6IC8vIE1hcmtlclxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ01hcmtlcic7XG5cdFx0XHRcdFx0aWYgKHRoaXMubWFya2Vyc1RvTHlyaWNzKSB7XG5cdFx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdMeXJpYyc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5zdHJpbmcgPSB0aGlzLmdldFN0cmluZ0RhdGEoZXZlbnRTdGFydEluZGV4KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDA3OiAvLyBDdWUgUG9pbnRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdDdWUgUG9pbnQnO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5zdHJpbmcgPSB0aGlzLmdldFN0cmluZ0RhdGEoZXZlbnRTdGFydEluZGV4KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDA5OiAvLyBEZXZpY2UgTmFtZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0RldmljZSBOYW1lJztcblx0XHRcdFx0XHRldmVudEpzb24uc3RyaW5nID0gdGhpcy5nZXRTdHJpbmdEYXRhKGV2ZW50U3RhcnRJbmRleCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgyMDogLy8gTUlESSBDaGFubmVsIFByZWZpeFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ01JREkgQ2hhbm5lbCBQcmVmaXgnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MjE6IC8vIE1JREkgUG9ydFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ01JREkgUG9ydCc7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLmRhdGEgPSBVdGlscy5ieXRlc1RvTnVtYmVyKFt0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4ICsgM11dKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDJGOiAvLyBFbmQgb2YgVHJhY2tcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdFbmQgb2YgVHJhY2snO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4NTE6IC8vIFNldCBUZW1wb1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1NldCBUZW1wbyc7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLmRhdGEgPSBNYXRoLnJvdW5kKDYwMDAwMDAwIC8gVXRpbHMuYnl0ZXNUb051bWJlcih0aGlzLmRhdGEuc2xpY2UoZXZlbnRTdGFydEluZGV4ICsgMywgZXZlbnRTdGFydEluZGV4ICsgNikpKTtcblx0XHRcdFx0XHR0aGlzLnRlbXBvID0gZXZlbnRKc29uLmRhdGE7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHg1NDogLy8gU01UUEUgT2Zmc2V0XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnU01UUEUgT2Zmc2V0Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDU4OiAvLyBUaW1lIFNpZ25hdHVyZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1RpbWUgU2lnbmF0dXJlJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDU5OiAvLyBLZXkgU2lnbmF0dXJlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnS2V5IFNpZ25hdHVyZSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHg3RjogLy8gU2VxdWVuY2VyLVNwZWNpZmljIE1ldGEtZXZlbnRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTZXF1ZW5jZXItU3BlY2lmaWMgTWV0YS1ldmVudCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnVW5rbm93bjogJyArIHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXggKyAxXS50b1N0cmluZygxNik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBsZW5ndGggPSB0aGlzLmRhdGFbdGhpcy5wb2ludGVyICsgZGVsdGFCeXRlQ291bnQgKyAyXTtcblx0XHRcdC8vIFNvbWUgbWV0YSBldmVudHMgd2lsbCBoYXZlIHZsdiB0aGF0IG5lZWRzIHRvIGJlIGhhbmRsZWRcblxuXHRcdFx0dGhpcy5wb2ludGVyICs9IGRlbHRhQnl0ZUNvdW50ICsgMyArIGxlbmd0aDtcblxuXHRcdH0gZWxzZSBpZih0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4XSA9PSAweGYwKSB7XG5cdFx0XHQvLyBTeXNleFxuXHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnU3lzZXgnO1xuXHRcdFx0dmFyIGxlbmd0aCA9IHRoaXMuZGF0YVt0aGlzLnBvaW50ZXIgKyBkZWx0YUJ5dGVDb3VudCArIDFdO1xuXHRcdFx0dGhpcy5wb2ludGVyICs9IGRlbHRhQnl0ZUNvdW50ICsgMiArIGxlbmd0aDtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBWb2ljZSBldmVudFxuXHRcdFx0aWYgKHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXhdIDwgMHg4MCkge1xuXHRcdFx0XHQvLyBSdW5uaW5nIHN0YXR1c1xuXHRcdFx0XHRldmVudEpzb24ucnVubmluZyA9IHRydWU7XG5cdFx0XHRcdGV2ZW50SnNvbi5ub3RlTnVtYmVyID0gdGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleF07XG5cdFx0XHRcdGV2ZW50SnNvbi5ub3RlTmFtZSA9IENvbnN0YW50cy5OT1RFU1t0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4XV07XG5cdFx0XHRcdGV2ZW50SnNvbi52ZWxvY2l0eSA9IHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXggKyAxXTtcblxuXHRcdFx0XHRpZiAodGhpcy5sYXN0U3RhdHVzIDw9IDB4OGYpIHtcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdOb3RlIG9mZic7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLmNoYW5uZWwgPSB0aGlzLmxhc3RTdGF0dXMgLSAweDgwICsgMTtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMubGFzdFN0YXR1cyA8PSAweDlmKSB7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTm90ZSBvbic7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLmNoYW5uZWwgPSB0aGlzLmxhc3RTdGF0dXMgLSAweDkwICsgMTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMucG9pbnRlciArPSBkZWx0YUJ5dGVDb3VudCArIDI7XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMubGFzdFN0YXR1cyA9IHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXhdO1xuXG5cdFx0XHRcdGlmICh0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4XSA8PSAweDhmKSB7XG5cdFx0XHRcdFx0Ly8gTm90ZSBvZmZcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdOb3RlIG9mZic7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLmNoYW5uZWwgPSB0aGlzLmxhc3RTdGF0dXMgLSAweDgwICsgMTtcblx0XHRcdFx0XHRldmVudEpzb24ubm90ZU51bWJlciA9IHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXggKyAxXTtcblx0XHRcdFx0XHRldmVudEpzb24ubm90ZU5hbWUgPSBDb25zdGFudHMuTk9URVNbdGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleCArIDFdXTtcblx0XHRcdFx0XHRldmVudEpzb24udmVsb2NpdHkgPSBNYXRoLnJvdW5kKHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXggKyAyXSAvIDEyNyAqIDEwMCk7XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyICs9IGRlbHRhQnl0ZUNvdW50ICsgMztcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXhdIDw9IDB4OWYpIHtcblx0XHRcdFx0XHQvLyBOb3RlIG9uXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTm90ZSBvbic7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLmNoYW5uZWwgPSB0aGlzLmxhc3RTdGF0dXMgLSAweDkwICsgMTtcblx0XHRcdFx0XHRldmVudEpzb24ubm90ZU51bWJlciA9IHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXggKyAxXTtcblx0XHRcdFx0XHRldmVudEpzb24ubm90ZU5hbWUgPSBDb25zdGFudHMuTk9URVNbdGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleCArIDFdXTtcblx0XHRcdFx0XHRldmVudEpzb24udmVsb2NpdHkgPSBNYXRoLnJvdW5kKHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXggKyAyXSAvIDEyNyAqIDEwMCk7XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyICs9IGRlbHRhQnl0ZUNvdW50ICsgMztcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXhdIDw9IDB4YWYpIHtcblx0XHRcdFx0XHQvLyBQb2x5cGhvbmljIEtleSBQcmVzc3VyZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1BvbHlwaG9uaWMgS2V5IFByZXNzdXJlJztcblx0XHRcdFx0XHRldmVudEpzb24uY2hhbm5lbCA9IHRoaXMubGFzdFN0YXR1cyAtIDB4YTAgKyAxO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5ub3RlID0gQ29uc3RhbnRzLk5PVEVTW3RoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXggKyAxXV07XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnByZXNzdXJlID0gZXZlbnRbMl07XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyICs9IGRlbHRhQnl0ZUNvdW50ICsgMztcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXhdIDw9IDB4YmYpIHtcblx0XHRcdFx0XHQvLyBDb250cm9sbGVyIENoYW5nZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0NvbnRyb2xsZXIgQ2hhbmdlJztcblx0XHRcdFx0XHRldmVudEpzb24uY2hhbm5lbCA9IHRoaXMubGFzdFN0YXR1cyAtIDB4YjAgKyAxO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5udW1iZXIgPSB0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4ICsgMV07XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnZhbHVlID0gdGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleCArIDJdO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlciArPSBkZWx0YUJ5dGVDb3VudCArIDM7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4XSA8PSAweGNmKSB7XG5cdFx0XHRcdFx0Ly8gUHJvZ3JhbSBDaGFuZ2Vcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdQcm9ncmFtIENoYW5nZSc7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLmNoYW5uZWwgPSB0aGlzLmxhc3RTdGF0dXMgLSAweGMwICsgMTtcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXIgKz0gZGVsdGFCeXRlQ291bnQgKyAyO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleF0gPD0gMHhkZikge1xuXHRcdFx0XHRcdC8vIENoYW5uZWwgS2V5IFByZXNzdXJlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnQ2hhbm5lbCBLZXkgUHJlc3N1cmUnO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5jaGFubmVsID0gdGhpcy5sYXN0U3RhdHVzIC0gMHhkMCArIDE7XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyICs9IGRlbHRhQnl0ZUNvdW50ICsgMjtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXhdIDw9IDB4ZWYpIHtcblx0XHRcdFx0XHQvLyBQaXRjaCBCZW5kXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnUGl0Y2ggQmVuZCc7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLmNoYW5uZWwgPSB0aGlzLmxhc3RTdGF0dXMgLSAweGUwICsgMTtcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXIgKz0gZGVsdGFCeXRlQ291bnQgKyAzO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnVW5rbm93bi4gIFBvaW50ZXI6ICcgKyB0aGlzLnBvaW50ZXIudG9TdHJpbmcoKSArICcgJyAgKyBldmVudFN0YXJ0SW5kZXgudG9TdHJpbmcoKSArICcgJyArIHRoaXMuZGF0YS5sZW5ndGg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLmRlbHRhICs9IGV2ZW50SnNvbi5kZWx0YTtcblx0XHR0aGlzLmV2ZW50cy5wdXNoKGV2ZW50SnNvbik7XG5cblx0XHRyZXR1cm4gZXZlbnRKc29uO1xuXHR9XG5cblx0ZW5kT2ZUcmFjaygpIHtcblx0XHRpZiAodGhpcy5kYXRhW3RoaXMucG9pbnRlciArIDFdID09IDB4ZmYgJiYgdGhpcy5kYXRhW3RoaXMucG9pbnRlciArIDJdID09IDB4MmYgJiYgdGhpcy5kYXRhW3RoaXMucG9pbnRlciArIDNdID09IDB4MDApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHNldE1hcmtlcnNUb0x5cmljcyh2YWx1ZSkge1xuXHRcdHRoaXMubWFya2Vyc1RvTHlyaWNzID0gdmFsdWU7XG5cdH1cbn1cbiJdfQ==
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
	function Utils() {
		_classCallCheck(this, Utils);
	}

	_createClass(Utils, null, [{
		key: 'byteToHex',
		value: function byteToHex(byte) {
			// Ensure hex string always has two chars
			return ('0' + byte.toString(16)).slice(-2);
		}
	}, {
		key: 'bytesToHex',
		value: function bytesToHex(byteArray) {
			var hex = [];
			byteArray.forEach(function (byte) {
				return hex.push(Utils.byteToHex(byte));
			});
			return hex.join('');
		}
	}, {
		key: 'hexToNumber',
		value: function hexToNumber(hexString) {
			return parseInt(hexString, 16);
		}
	}, {
		key: 'bytesToNumber',
		value: function bytesToNumber(byteArray) {
			return Utils.hexToNumber(Utils.bytesToHex(byteArray));
		}
	}, {
		key: 'bytesToLetters',
		value: function bytesToLetters(byteArray) {
			var letters = [];
			byteArray.forEach(function (byte) {
				return letters.push(String.fromCharCode(byte));
			});
			return letters.join('');
		}
	}, {
		key: 'decToBinary',
		value: function decToBinary(dec) {
			return (dec >>> 0).toString(2);
		}
	}, {
		key: 'readVarInt',
		value: function readVarInt(byteArray) {
			var result = 0;
			byteArray.forEach(function (number) {
				var b = number;
				if (b & 0x80) {
					result += b & 0x7f;
					result <<= 7;
				} else {
					/* b is the last byte */
					result += b;
				}
			});

			return result;
		}
	}, {
		key: 'atob',
		value: function (_atob) {
			function atob(_x) {
				return _atob.apply(this, arguments);
			}

			atob.toString = function () {
				return _atob.toString();
			};

			return atob;
		}(function (string) {
			if (typeof atob === 'function') return atob(string);
			return new Buffer(string, 'base64').toString('binary');
		})
	}]);

	return Utils;
}();

exports.Utils = Utils;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJVdGlscyIsImJ5dGUiLCJ0b1N0cmluZyIsInNsaWNlIiwiYnl0ZUFycmF5IiwiaGV4IiwiZm9yRWFjaCIsInB1c2giLCJieXRlVG9IZXgiLCJqb2luIiwiaGV4U3RyaW5nIiwicGFyc2VJbnQiLCJoZXhUb051bWJlciIsImJ5dGVzVG9IZXgiLCJsZXR0ZXJzIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiZGVjIiwicmVzdWx0IiwiYiIsIm51bWJlciIsInN0cmluZyIsImF0b2IiLCJCdWZmZXIiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTUEsSzs7Ozs7Ozs0QkFDWUMsSSxFQUFNO0FBQ3RCO0FBQ0EsVUFBTyxDQUFDLE1BQU1BLEtBQUtDLFFBQUwsQ0FBYyxFQUFkLENBQVAsRUFBMEJDLEtBQTFCLENBQWdDLENBQUMsQ0FBakMsQ0FBUDtBQUNBOzs7NkJBRWlCQyxTLEVBQVc7QUFDNUIsT0FBSUMsTUFBTSxFQUFWO0FBQ0FELGFBQVVFLE9BQVYsQ0FBa0I7QUFBQSxXQUFRRCxJQUFJRSxJQUFKLENBQVNQLE1BQU1RLFNBQU4sQ0FBZ0JQLElBQWhCLENBQVQsQ0FBUjtBQUFBLElBQWxCO0FBQ0EsVUFBT0ksSUFBSUksSUFBSixDQUFTLEVBQVQsQ0FBUDtBQUNBOzs7OEJBRWtCQyxTLEVBQVc7QUFDN0IsVUFBT0MsU0FBU0QsU0FBVCxFQUFvQixFQUFwQixDQUFQO0FBQ0E7OztnQ0FFb0JOLFMsRUFBVztBQUMvQixVQUFPSixNQUFNWSxXQUFOLENBQWtCWixNQUFNYSxVQUFOLENBQWlCVCxTQUFqQixDQUFsQixDQUFQO0FBQ0E7OztpQ0FFcUJBLFMsRUFBVztBQUNoQyxPQUFJVSxVQUFVLEVBQWQ7QUFDQVYsYUFBVUUsT0FBVixDQUFrQjtBQUFBLFdBQVFRLFFBQVFQLElBQVIsQ0FBYVEsT0FBT0MsWUFBUCxDQUFvQmYsSUFBcEIsQ0FBYixDQUFSO0FBQUEsSUFBbEI7QUFDQSxVQUFPYSxRQUFRTCxJQUFSLENBQWEsRUFBYixDQUFQO0FBQ0E7Ozs4QkFFa0JRLEcsRUFBSztBQUNwQixVQUFPLENBQUNBLFFBQVEsQ0FBVCxFQUFZZixRQUFaLENBQXFCLENBQXJCLENBQVA7QUFDSDs7OzZCQUVpQkUsUyxFQUFXO0FBQzVCLE9BQUljLFNBQVMsQ0FBYjtBQUNBZCxhQUFVRSxPQUFWLENBQWtCLGtCQUFVO0FBQzNCLFFBQUlhLElBQUlDLE1BQVI7QUFDQSxRQUFJRCxJQUFJLElBQVIsRUFBYztBQUNiRCxlQUFXQyxJQUFJLElBQWY7QUFDQUQsZ0JBQVcsQ0FBWDtBQUNBLEtBSEQsTUFHTztBQUNOO0FBQ0FBLGVBQVVDLENBQVY7QUFDQTtBQUNELElBVEQ7O0FBV0EsVUFBT0QsTUFBUDtBQUNBOzs7Ozs7Ozs7Ozs7O2NBRVdHLE0sRUFBUTtBQUNuQixPQUFJLE9BQU9DLElBQVAsS0FBZ0IsVUFBcEIsRUFBZ0MsT0FBT0EsS0FBS0QsTUFBTCxDQUFQO0FBQ2hDLFVBQU8sSUFBSUUsTUFBSixDQUFXRixNQUFYLEVBQW1CLFFBQW5CLEVBQTZCbkIsUUFBN0IsQ0FBc0MsUUFBdEMsQ0FBUDtBQUNBLEc7Ozs7OztBQUdGc0IsUUFBUXhCLEtBQVIsR0FBZ0JBLEtBQWhCIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVXRpbHMge1xuXHRzdGF0aWMgYnl0ZVRvSGV4KGJ5dGUpIHtcblx0XHQvLyBFbnN1cmUgaGV4IHN0cmluZyBhbHdheXMgaGFzIHR3byBjaGFyc1xuXHRcdHJldHVybiAoJzAnICsgYnl0ZS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcblx0fVxuXG5cdHN0YXRpYyBieXRlc1RvSGV4KGJ5dGVBcnJheSkge1xuXHRcdHZhciBoZXggPSBbXTtcblx0XHRieXRlQXJyYXkuZm9yRWFjaChieXRlID0+IGhleC5wdXNoKFV0aWxzLmJ5dGVUb0hleChieXRlKSkpO1xuXHRcdHJldHVybiBoZXguam9pbignJyk7XG5cdH1cblxuXHRzdGF0aWMgaGV4VG9OdW1iZXIoaGV4U3RyaW5nKSB7XG5cdFx0cmV0dXJuIHBhcnNlSW50KGhleFN0cmluZywgMTYpO1xuXHR9XG5cblx0c3RhdGljIGJ5dGVzVG9OdW1iZXIoYnl0ZUFycmF5KSB7XG5cdFx0cmV0dXJuIFV0aWxzLmhleFRvTnVtYmVyKFV0aWxzLmJ5dGVzVG9IZXgoYnl0ZUFycmF5KSk7XG5cdH1cblxuXHRzdGF0aWMgYnl0ZXNUb0xldHRlcnMoYnl0ZUFycmF5KSB7XG5cdFx0dmFyIGxldHRlcnMgPSBbXTtcblx0XHRieXRlQXJyYXkuZm9yRWFjaChieXRlID0+IGxldHRlcnMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGUpKSk7XG5cdFx0cmV0dXJuIGxldHRlcnMuam9pbignJyk7XG5cdH1cblxuXHRzdGF0aWMgZGVjVG9CaW5hcnkoZGVjKSB7XG4gICAgXHRyZXR1cm4gKGRlYyA+Pj4gMCkudG9TdHJpbmcoMik7XG5cdH1cblxuXHRzdGF0aWMgcmVhZFZhckludChieXRlQXJyYXkpIHtcblx0XHR2YXIgcmVzdWx0ID0gMDtcblx0XHRieXRlQXJyYXkuZm9yRWFjaChudW1iZXIgPT4ge1xuXHRcdFx0dmFyIGIgPSBudW1iZXI7XG5cdFx0XHRpZiAoYiAmIDB4ODApIHtcblx0XHRcdFx0cmVzdWx0ICs9IChiICYgMHg3Zik7XG5cdFx0XHRcdHJlc3VsdCA8PD0gNztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8qIGIgaXMgdGhlIGxhc3QgYnl0ZSAqL1xuXHRcdFx0XHRyZXN1bHQgKz0gYjtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRzdGF0aWMgYXRvYihzdHJpbmcpIHtcblx0XHRpZiAodHlwZW9mIGF0b2IgPT09ICdmdW5jdGlvbicpIHJldHVybiBhdG9iKHN0cmluZyk7XG5cdFx0cmV0dXJuIG5ldyBCdWZmZXIoc3RyaW5nLCAnYmFzZTY0JykudG9TdHJpbmcoJ2JpbmFyeScpO1xuXHR9XG59XG5cbmV4cG9ydHMuVXRpbHMgPSBVdGlsczsiXX0=
