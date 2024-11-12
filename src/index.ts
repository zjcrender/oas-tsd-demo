import API from '@/services';

const req = API.pet.getPets({
  params: {
    limit: 10,
  }
})

req.then(response => {
  // AxiosResponse<API.pet.Pets>
  console.log(response)
  // AxiosResponse<T>['headers']
  console.log(response.headers)
})

// same as await-to-js
req.try().then(([ error, data ]) => {
  // error: Error | null
  // data: AxiosResponse<API.pet.Pets> | undefined
  console.log(error, data)
})

// 自动使用默认的转换
req.unwrap().then(pets => {
  // API.pet.Pets
  console.log(pets)
  // API.pet.Pet | undefined
  console.log(pets.at(5))
})

// 自定义转换
req
  .unwrap(response => response.data.length)
  .then(count => {
    // number
    console.log(count)
  })

// same as await-to-js
req.unwrap().try().then(([ error, data ]) => {
  // error: Error | null
  // data: API.pet.Pets | undefined
  console.log(error, data)
})
