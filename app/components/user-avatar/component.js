import EmberObject from '@ember/object';
import { computed } from '@ember/object';

import Component from '@ember/component';

export default Component.extend({
	user: computed(function() {
		return EmberObject.create({ avatarId: 'some-id-here' });
	}),

	isUploading: false,

	didInsertElement() {
		this._super(...arguments);

		this.$('#fileupload').fileupload({
			pasteZone: null,
			dataType: 'json',
			url: 'someUploadEndpointHere',
			add(e, data) {
				data.submit(); // this line shits the bed
			},
			beforeSend() {
				this.set('isUploading', true);
			},
			done() {
				this.onSuccess('newIdTakenFromResponse');
				// this is just for test purposes .. if the request is being sent ... all is fine. But now it's not sending soo....
			},
			error(error) {
				throw error;
				// console.log('Error: '+ e.statusText + ', ' + e.responseText);
			},
			always() {
				if(this.get('isDestroying') || this.get('isDestroying')) {
					return;
				}
				this.set('isUploading', false);
			}
		});
	},

	willDestroyElement() {
		this._super(...arguments);

		this.$('#fileupload').fileupload('destroy');
	},

	onSuccess(newAvatarId) {
		this.get('user').set('avatarId', newAvatarId);
	}
});
