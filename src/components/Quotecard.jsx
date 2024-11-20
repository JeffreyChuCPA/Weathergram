import axios, { CanceledError } from "axios";
import urls from "../utilities/urls";
import { useState, useEffect } from "react";

const Quotecard = ({onData}) => {
  const [quote, setQuote] = useState(null)

  useEffect(() => {
    axios.get(urls.quoteURL)
    .then(response => {
      setQuote(response.data);
    })
    .catch(error => {
      if (error instanceof CanceledError) return;
    })
  }, [] )

  if (onData?.name) {
    return null;
  }

    return (
        <div className="bg-[#000000d0] text-white p-8 rounded-[24px] w-full max-w-sm ">
            { quote && <p className="font-cursive text-3xl" >{quote.quote}</p>}
            {/*//*TODO Fix below code for the -undefined  */}
            { quote && <p className="font-cursive text-2xl text-right mt-4" >{`- ${quote.author}`}</p>}
        </div>
    );
};

export default Quotecard;
