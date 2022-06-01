
let varuosad = [
    {
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
    }
]


export const getVaruosad = function(req, res){
    res.json(varuosad)
}
export const createVaruosad = function(req, res){
    const { Model, Product, Height, Weight, Manufactuer, Location} = req.body
    varuosad.push({
      Model: Model,
      Product: Product,
      Height: Height,
      Weight: Weight,
      Manufactuer: Manufactuer,
      Location: Location
    })
    res.json(varuosad)
}
export const getOneVaruosa = function(req, res){
    const varuosaModel = req.params.Model
    
    const varuosa = varuosad.find(function(varuosa){
        return varuosa.Model === varuosaModel
    })
    res.json(varuosa)
}
export const deleteVaruosa = function(req,res){
    const varuosaModel = req.params.Model

    varuosad = varuosad.filter(function(varuosa){
        return varuosa.Model !== varuosaModel
    })
    res.json(varuosad)
}

export const updateVaruosad = function(req,res){
    const varuosaModel = req.params.Model
    const {Product, Height, Weight, Manufactuer, Location} = req.body

    varuosad = varuosad.map(function(varuosa){
        if(varuosa.Model === varuosaModel){
            return {
                Model : varuosa.Model,
                Product,
                Height,
                Weight,
                Manufactuer,
                Location
            }
            
        }
        return varuosa
    })
    res.json(varuosad)
}