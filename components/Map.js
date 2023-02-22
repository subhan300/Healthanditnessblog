
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'
import { useRef, useState ,useEffect} from 'react'

const center = { lat:24.945665738220846, lng:67.04077602354319 }

function Map({path}) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  })
  useEffect(() => {
    // console.log("working")
    
    if(isLoaded){
      calculateRoute()
    }

  }, [isLoaded])
  const [map, setMap] = useState(/** @type google.maps.Map */ (null))
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')
let [resultArray,setResultArray]=useState([])
  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef()

  if (!isLoaded) {
    return <h1> wait ...</h1>
  }
let temp=[]
  async function calculateRoute() {

for(let i=0;i<path.length;i++){
  const directionsService = new google.maps.DirectionsService()
  const results = await directionsService.route({
    origin: path[i].origin,
    destination:path[i].destination,
    travelMode: google.maps.TravelMode.DRIVING,
    
  })
  
  temp.push(results)


}
setResultArray([...temp])
  
  // // setDirectionsResponse(results)
  // setDistance(results.routes[0].legs[0].distance.text)
  // setDuration(results.routes[0].legs[0].duration.text)
  }
  // console.log("result array",resultArray)


  // function clearRoute() {
  //   setDirectionsResponse(null)
  //   setDistance('')
  //   setDuration('')
  //   originRef.current.value = ''
  //   destiantionRef.current.value = ''
  // }

  return (
  
    <div className='map bd_yellow'>
     
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={map => setMap(map)}
        >
       {/* {
        path.map(val=>{
          return(  <Marker position={val.origin}  />)
        })
       } */}
          {resultArray.length>0 && (
          resultArray.map((val,i)=>{    
          return(  <div>
            <DirectionsRenderer directions={val} />
          
          </div>)
          })
          )}
        </GoogleMap>
      
    
        {/* <HStack spacing={2} justifyContent='space-between'>
          <Box flexGrow={1}>
            <Autocomplete>
              <Input type='text' placeholder='Origin' ref={originRef} />
            </Autocomplete>
          </Box>
          <Box flexGrow={1}>
            <Autocomplete>
              <Input
                type='text'
                placeholder='Destination'
                ref={destiantionRef}
              />
            </Autocomplete>
          </Box>

          <ButtonGroup>
            <Button colorScheme='pink' type='submit' onClick={calculateRoute}>
             --Make Route--
            </Button>
            <IconButton
              aria-label='center back'
              icon={<FaTimes />}
              onClick={clearRoute}
            />
          </ButtonGroup>
        </HStack>
        <HStack spacing={4} mt={4} justifyContent='space-between'>
          <Text>Distance: {distance} </Text>
          <Text>Duration: {duration} </Text>
          <IconButton
            aria-label='center back'
            icon={<FaLocationArrow />}
            isRound
            onClick={() => {
              map.panTo(center)
              map.setZoom(15)
            }}
          />
        </HStack> */}
 
    </div>
 
  )
}

export default Map;