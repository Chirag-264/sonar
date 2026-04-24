import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import RightSidebar from '@/components/ui/RightSidebar'

const Dashboard = () => {

  const loggedIn = { firstName: 'Chirag', lastName: 'Rajput', email: 'test@example.com'}

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>

          <HeaderBox 
            type = 'greeting'
            title = 'Welcome'
            subtext='Access and manage your account and transactions efficiently'
            user = {loggedIn? loggedIn.firstName : 'Guest'}
          />

          <TotalBalanceBox 
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance = {1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 1350.50}, {currentBalance: 5500.80}]}
      />
    </section>
    
  )
}

export default Dashboard