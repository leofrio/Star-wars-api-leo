import axios from "axios"; 

async function GettingData(url, data) {

    data = data || [];

    await axios.get(url).then((response) => {

        data= data.concat(response.data)
        if( response.data.next != null ) {
            data= GettingData(response.data.next, data);
        } 
    });

    return  data;
}

export default GettingData 