import React, { Fragment, useEffect, useState } from 'react'
import { Circles } from 'react-loader-spinner'
import ProductItem from '../components/ProductItem'

const Home = () => {
    const [productsData, setProductsData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errMsg, setErrMsg] = useState(null)

    const fetchPruducts = async () => {
        setIsLoading(true)
        try{
            const response = await fetch('https://fakestoreapi.com/products')

            const data = await response.json()
            setProductsData(data)
            setIsLoading(false)
            //console.log(data)
            setErrMsg(null)
        }catch(error){
            setErrMsg(error.message)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchPruducts()
    },[])

    //console.log(productsData)

  return (
    <Fragment>
        {
            isLoading ? (
                <div className='flex min-h-[80vh] w-full justify-center items-center'>
                    <Circles
                        color='red'
                        width='70px'
                    />
                </div>
            ) : errMsg !== null ? (
                <div className='flex min-h-[80vh] w-full justify-center items-center'>
                    <p className='text-red-500'>{errMsg} !</p>
                </div>
            ) : <div className='min-h-[80vh] grid   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3'>
                {
                    productsData.length > 0 ? (
                        productsData.map(item => {
                            return <ProductItem key={item.id} product={item}/>
                        })
                    ) : <p>There is no item found !</p>
                }
            </div>
        }
    </Fragment>
  )
}

export default Home