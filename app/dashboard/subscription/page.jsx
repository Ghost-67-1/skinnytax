import React from 'react'
import { getUser, getUserSubscriptions } from '@/utils/supabase/queries';
import { createClient } from '@/utils/supabase/server';

export default async  function Subscription() {
  const supabase = createClient();
  const user = await getUser()
    const subscriptions = await getUserSubscriptions(supabase, JSON.parse(user).id)
    return (
        <div className='Subcription_table'>
            <div className="container">
                <div className="table-wrapper mt-4">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Price</th>
                                <th>Started At</th>
                                <th>Ended At</th>
                                <th>Cancel on End</th>
                                <th>Cancelled On</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subscriptions?.map((subscription) => (
                            <tr>
                                <td>{subscription.prices.products.name}</td>
                                <td>{subscription.status}</td>
                                <td>{subscription.prices.unit_amount/100}</td>
                                <td>{new Date(subscription.current_period_start).toLocaleString('en-Us', {formatMatcher: "best fit"})}</td>
                                <td>{new Date(subscription.current_period_end).toLocaleString('en-Us', {formatMatcher: "best fit"})}</td>
                                <td>{subscription.cancel_at_period_end?'Yes':'No'}</td>
                                <td>{new Date(subscription.canceled_at).toLocaleString('en-Us', {formatMatcher: "best fit"})}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}