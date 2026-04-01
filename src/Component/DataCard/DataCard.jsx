import { CircleCheck } from 'lucide';
import PricingFeature from './PricingFeature';
import { useState } from 'react';
import { toast } from 'react-toastify';
const DataCard = ({ data, carts, setCarts }) => {
    const [isCard, setCard] = useState(false)
    const { icon, name, price, tag, features, description } = data
    const handelAdd = () => {
        setCard(true)
        const handelItm = carts.find(item => item.id === data.id)
        if (handelItm) {
            toast.error("Item already Added to cart")
            return
        }
        setCarts([...carts, data])
        toast.success("Item Added Cart")
    }
    return (
        <div>
            <div className="max-w-96 space-y-5 bg-gray-100 shadow-xl h-full group py-8 px-5 flex flex-col flex-1">
                <div className="flex justify-between">
                    <img src={icon} alt="" />
                    <div className="flex justify-center items-center flex-col">

                        <p className={`rounded-full px-2 ${tag === 'Popular' ? 'bg-green-200  text-green-600' : tag === 'New' ? 'bg-yellow-200 text-yellow-600' : 'bg-red-200 text-red-700'}`}>{tag}</p>
                    </div>
                </div>
                <div className="flex flex-col flex-grow">
                    <h2 className='text-3xl font-bold'>{name}</h2>
                    <p className='text-xl'>{description}</p>
                    <p className='text-2xl font-bold'>{price}<span>/month</span></p>
                    {
                        features.map((featur, index) => <PricingFeature key={index} featur={featur} />)
                    }
                    <div className="pt-0">

                        <button className={`btn w-full rounded-full ${isCard ? 'btn-success' : 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white'}`} onClick={handelAdd}>{isCard ? "Added to Cart" : "Buy Now"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataCard;