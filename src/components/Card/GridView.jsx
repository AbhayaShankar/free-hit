import { useContext } from 'react'
import { ToolContext } from '../../App'

const Grid2 = () => {
  const {
    filteredProducts,
    category,
    handelBookmarkAdd,
    bookmarkfilteredProducts,
    deleteres,
    records,
  } = useContext(ToolContext)
  return (
    <main className="grid">
      {category === 'all' ? (
        <>
          {records.map((product, index) => {
            return (
              category === 'all' && (
                <article key={index}>
                  <div className="text">
                    <div className="text_top">
                      <img className="card-img" src={product.image} alt="" />
                      <h3 className="card-title">{product.productName}</h3>
                    </div>
                    <p>{product.description}</p>
                    <div className="btn-cont">
                      <a target="_blank" href={product.link}>
                        <button className="visit">
                          <font color="white" size="4">
                            Visit
                          </font>
                        </button>
                      </a>
                      {bookmarkfilteredProducts.some(
                        (obj) => obj['productName'] === product.productName
                      ) ? (
                        <button onClick={() => deleteres(product)}>
                          <a href="#">
                            Delete<i className="ri-bookmark-fill"></i>
                          </a>
                        </button>
                      ) : (
                        <a href="#">
                          <button
                            className="bookmark"
                            onClick={() => handelBookmarkAdd(product)}
                          >
                            <font color="white" size="4">
                              Bookmark
                            </font>
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              )
            )
          })}
        </>
      ) : (
        <>
          {filteredProducts.map((product, index) => {
            return (
              category === product.category && (
                <article key={index}>
                  <div className="text">
                    <div className="text_top">
                      <img className="card-img" src={product.image} alt="" />
                      <h3 className="card-title">{product.productName}</h3>
                    </div>
                    <p>{product.description}</p>
                    <div className="btn-cont">
                      <a target="_blank" href={product.link}>
                        <button className="visit">
                          <font color="white" size="4">
                            Visit
                          </font>
                        </button>
                      </a>
                      {bookmarkfilteredProducts.some(
                        (obj) => obj['productName'] === product.productName
                      ) ? (
                        <button onClick={() => deleteres(product)}>
                          <a href="#">
                            Delete<i className="ri-bookmark-fill"></i>
                          </a>
                        </button>
                      ) : (
                        <a href="#">
                          <button
                            className="bookmark"
                            onClick={() => handelBookmarkAdd(product)}
                          >
                            <font color="white" size="4">
                              Bookmark
                            </font>
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              )
            )
          })}
        </>
      )}
    </main>
  )
}

export default Grid2
