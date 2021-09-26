export const getAll = (req, res) => {
  let monsters = [{
    name: 'dinosaur',
    weight: 22,
    weightUnit: 'tons',
    species: 'Apatosaurus',
    angry: false,
    eatmeat: true,
    friend: [{
      name: 'dinosaur friend',
      weight: 74,
      weightUnit: 'tons',
      species: 'Alamosaurus',
      hatehuman: true,
      fightfree: true,
    }]
  },{
    name: 'dinosaur2',
    weight: 220,
    weightUnit: 'tons',
    species: 'Apatosaurus',
    angry: false,
    eatmeat: true,
    friend: [{
      name: 'dinosaur friend',
      weight: 74,
      weightUnit: 'tons',
      species: 'Alamosaurus',
      hatehuman: true,
      fightfree: true,
    }]
  }]

  res.json(monsters)
}

export const getById = (req, res) => {
  const id = req.params.id
  const monster = {
      name: 'dinosaur',
      weight: 22,
      weightUnit: 'tons',
      species: 'Apatosaurus',
      angry: false,
      eatmeat: true,
      _id: id
    }

  res.json(monster)
}


export const create = (req, res) => {
  const body_name = req.body.name
  const body_weight = req.body.weight
  const body_species = req.body.species

  const monster = {
    name: body_name,
    weight: body_weight,
    species: body_species
  }

  res.json(monster)
}


export const update = (req, res) => {
  const id = req.params.id
  const body_name = req.body.name
  const body_weight = req.body.weight
  const body_species = req.body.species

  const monster = {
    name: body_name,
    weight: body_weight,
    species: body_species,
    _id: id
  }

  res.json(monster)
  }


export const deleteById = (req, res) => {
  const id = req.params.id

  res.json({
    status: 'delete',
    _id: id
  })
}