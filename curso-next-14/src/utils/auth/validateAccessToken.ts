import { GraphQLClientSingleton } from 'app/graphql';
import { customerName } from 'app/graphql/queries/customerName';
import { cookies } from 'next/headers';

export const validateAccessToken = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  const grapqlClient = await GraphQLClientSingleton.getInstance().getClient();
  const { customer } = await grapqlClient.request(customerName, {
    customerAccessToken: accessToken,
  })

  return customer
}