import { Router } from 'express'
import user from './user'
import auth from './auth'
import passwordReset from './password-reset'
import player from './player'
import game from './game'
import card from './Card'
import file from './file'

const router = new Router()

/**
 * @apiDefine master Master access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine admin Admin access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine user User access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine listParams
 * @apiParam {String} [q] Query to search.
 * @apiParam {Number{1..30}} [page=1] Page number.
 * @apiParam {Number{1..100}} [limit=30] Amount of returned items.
 * @apiParam {String[]} [sort=-createdAt] Order of returned items.
 * @apiParam {String[]} [fields] Fields to be returned.
 */
router.use('/api/users', user)
router.use('/api/auth', auth)
router.use('/api/password-resets', passwordReset)
router.use('/api/players', player)
router.use('/api/games', game)
router.use('/api/cards', card)
router.use('/api/files', file)

export default router
