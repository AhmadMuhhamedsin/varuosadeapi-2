**Näita kõik varuosad**
----
  Tagastab json andmed kõigi varuosade kohta
* **URL**

  /api/varuosad

* **Method:**
  
  
  `GET`
  
*  **URL Params**

   **Required:**
 

* **Data Params**

  Ei ole

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
        Model : "VKBA3932",
        Product: "Rattalaager",
        Height: 0,
        Weight: 0,
        Manufactuer: "Mazda",
        Location: 0
    },
    {
        Model : "VKBA3932",
        Product: "Rattalaager",
        Height: 0,
        Weight: 0,
        Manufactuer: "Mazda",
        Location: 0
    },
    {
      Model: "WL7401WIX",
      Product: "Õlifilter",
      Height: 0,
      Weight: 0,
      Manufactuer: 0,
      Location: 0
    },
    {
      Model: "",
      Product: "",
      Height: null,
      Weight: null,
      Manufactuer: null,
      Location: null
    },
     {
      Model: "2356517",
      Product: "Valuveljed",
      Height: 0,
      Weight: 0,
      Manufactuer: 0,
      Location: 0
    },
    {
      Model: "13601579",
      Product: "Raamat",
      Height: 0,
      Weight: 0,
      Manufactuer: "BMW",
      Location: 0
    },
    {
      Model: "104552570",
      Product: "Handlebar riser 40mm  BMW 1200GS",
      Height: 0,
      Weight: 0,
      Manufactuer: "BMW",
      Location: 0
    },
    {
      Model: "0010T11",
      Product: "engine oil level check",
      Height: 0,
      Weight: 0,
      Manufactuer: 0,
      Location: 0
    },
    {
      Model: "0010T22",
      Product: "f",
      Height: 0,
      Weight: 0,
      Manufactuer: 0,
      Location: 0
    },
    {
      Model: "11592101",
      Product: "Hõõgküünal NGK Y-508J",
      Height: 0,
      Weight: 0,
      Manufactuer: 0,
      Location: 0
    }`


* **Error Response:**

  

  * **Code:** 404 NOT FOUND <br />
    **Content:** 

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/api/varuosad/",
      dataType: "json",
      type : "GET",
      
    });
  ```

* **Notes:**
Kasutasin http clienti Insomnia.

**Näita 1 varuosa**
----
  Tagastab json andmed ühe varuosa kohta
* **URL**

  /api/varuosad/:Model

* **Method:**
  
  
  `GET`
  
*  **URL Params**

   **Required:**

 `id=[any]`

* **Data Params**

  Ei ole

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
                    Model : "VKBA3932",
                    Product: "Rattalaager",
                    Height: 0,
                    Weight: 0,
                    Manufactuer: "Mazda",
                    Location: 0
                  }`


* **Error Response:**

  

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Varuosa sellise mudeliga ei eksisteeri" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/api/varuosad/VKBA3932",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

* **Notes:** 
Peaks olema õige mudeli number, see võib olla igas andmetüübis (numbrid,tähed)

**Kustuta 1 varuosa**
----
  Kustutab ühe varuosa ära mudeli/seerianumbri järgi
* **URL**

  /api/varuosad/:Model

* **Method:**
  
  
  `DELETE`
  
*  **URL Params**

   **Required:**

    `id=[any]`

* **Data Params**

  Ei ole

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
                    Model : "VKBA3932",
                    Product: "Rattalaager",
                    Height: 0,
                    Weight: 0,
                    Manufactuer: "Mazda",
                    Location: 0
                  },
                  {
                    "Model": "WL7401WIX",
                    "Product": "Õlifilter",
                    "Height": 0,
                    "Weight": 0,
                    "Manufactuer": 0,
                    "Location": 0
                  },
                  {
                    "Model": "",
                    "Product": "",
                    "Height": null,
                    "Weight": null,
                    "Manufactuer": null,
                    "Location": null
                  },
                  {
                    "Model": "2356517",
                    "Product": "Valuveljed",
                    "Height": 0,
                    "Weight": 0,
                    "Manufactuer": 0,
                    "Location": 0
                  },
                  {
                    "Model": "13601579",
                    "Product": "Raamat",
                    "Height": 0,
                    "Weight": 0,
                    "Manufactuer": "BMW",
                    "Location": 0
                  },
                  {
                    "Model": "104552570",
                    "Product": "Handlebar riser 40mm  BMW 1200GS",
                    "Height": 0,
                    "Weight": 0,
                    "Manufactuer": "BMW",
                    "Location": 0
                  },
                  {
                    "Model": "0010T11",
                    "Product": "engine oil level check",
                    "Height": 0,
                    "Weight": 0,
                    "Manufactuer": 0,
                    "Location": 0
                  },
                  {
                    "Model": "0010T22",
                    "Product": "f",
                    "Height": 0,
                    "Weight": 0,
                    "Manufactuer": 0,
                    "Location": 0
                  }`


* **Error Response:**

  

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Varuosa sellise mudeliga ei eksisteeri" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/api/varuosad/VKBA3932",
      dataType: "json",
      type : "DELETE",
      success : function(r) {
        console.log(r);
      }
    });
  ```

* **Notes:** 
Peaks olema õige mudeli/seeria number, see võib olla igas andmetüübis (numbrid,tähed), selle mudeli/seeria kustutamisel tagastatakse ülejäänud andmed/varuosad.

**Muuda 1 varuosa**
----
  Muudab ühe varuosa andmed ära selle varuosa mudeli/seerianumbri järgi
* **URL**

  /api/varuosad/:Model

* **Method:**
  
  
  `PUT`
  
*  **URL Params**

   **Required:**

    `id=[any]`

* **Data Params**

  Ei ole

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
                    Product: "Rattalaagersss",
                    Height: 0,
                    Weight: 0,
                    Manufactuer: "Mazdasss",
                    Location: 0
                  }`


* **Error Response:**

  

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Varuosa sellise mudeliga ei eksisteeri" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/api/varuosad/VKBA3932",
      dataType: "json",
      type : "PUT",
      success : function(r) {
        console.log(r);
      }
    });
  ```

* **Notes:** 
Peaks olema õige mudeli/seeria number, see võib olla igas andmetüübis (numbrid,tähed), selle mudeli/seeria numbri sisestamise tuleb ülejäänud väljad ise kirjutada json formaadis.

**Lisa 1 varuosa**
----
  Lisab ühe varuosa juurde
* **URL**

  /api/varuosad

* **Method:**
  
  
  `POST`
  
*  **URL Params**

   **Required:**

    

* **Data Params**

  Ei ole

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
          	        Model : "VKBA3932"
                    Product: "Rattalaagrid",
                    Height: 0,
                    Weight: 0,
                    Manufactuer: "Toyota",
                    Location: 0
                  }`


* **Error Response:**

  

  * **Code:** <br />
    **Content:** 

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/api/varuosad",
      dataType: "json",
      type : "POST",
      success : function(r) {
        console.log(r);
      }
    });
  ```

* **Notes:** 
Panete ise json formaadis andmed varuosa kohta, mida tahate teiste varuosade juurde lisada. Lisage enda mudel/seeria number ja teised väljad ka kaasa.
