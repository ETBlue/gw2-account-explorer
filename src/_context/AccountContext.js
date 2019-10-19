import React from 'react'

import useAccount from '../_state/useAccount'
import useHistory from '../_state/useHistory'
import useItems from '../_state/useItems'
import useGuilds from '../_state/useGuilds'
import useAchievements from '../_state/useAchievements'
import useHomeNodes from '../_state/useHomeNodes'
import useLuck from '../_state/useLuck'
import useMastery from '../_state/useMastery'
import useFashion from '../_state/useFashion'

const AccountContext = React.createContext()

const AccountContextProvider = (props) => {
  const {account, token, setToken, fetchAccountInfo} = useAccount()
  const {guilds} = useGuilds(account && account.guilds)
  const {history} = useHistory({account, token})
  const {accountAchievements, achievements, accountTitles, titles} = useAchievements(token)
  const {accountHomeNodes} = useHomeNodes(token)
  const {luck, magicFind} = useLuck(token)
  const {accountMasteries} = useMastery(token)
  const {
    accountOutfits,
    accountGliders,
    accountMountTypes,
    accountMountSkins,
    accountMinis,
    accountMailcarriers,
    accountFinishers,
    accountNovelties
  } = useFashion(token)

  const {items, fetchItems} = useItems()

  // update achievement dictionary on user change


  // render

  return (
    <AccountContext.Provider value={{
      history,

      token,
      setToken,
      fetchAccountInfo,
      account,

      guilds,
      achievements,
      titles,

      luck,
      magicFind,
      accountAchievements,
      accountTitles,
      accountHomeNodes,
      accountMasteries,
      accountOutfits,
      accountGliders,
      accountMountTypes,
      accountMountSkins,
      accountMinis,
      accountMailcarriers,
      accountFinishers,
      accountNovelties

    }}>
      {props.children}
    </AccountContext.Provider>
  )
}

export {AccountContext, AccountContextProvider}
