import {sendRequest} from './request.js'

export const buyListApi = data => {
	return sendRequest ({
		url: '/api/buyList.json',
		method: 'get',
		data
	})
}