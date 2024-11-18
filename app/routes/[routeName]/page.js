export default async function ProductPage({ params }) {
  const { routeName } = await params

  return (
    <div>
      <div className="mt-40">
        <h1>About Product ID: {routeName}</h1>
      </div>
    </div>
  )
}
