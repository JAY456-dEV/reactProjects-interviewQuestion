import { useEffect, useState } from 'react'
import Otp from '../components/OtpEnter/otp'
// import Compo from '../components/compo'
import MultiSelect from '../components/multiSelectSearch/multiSelect'
import PasswordGen from '../components/passwordGen/passwordGen'
import ProgressBar from '../components/progressBar/progressbar'
import './App.css'
import TrelloMain from '../components/trello/trelloMain'
import Expense from '../components/expensetracker/expense'
import StepForm from '../components/multiStepForm/stepForm'
import SecForm from '../components/multiStepForm/secForm'
import ThirdForm from '../components/multiStepForm/thirdForm'
import Pagination from '../components/pagination/pagination'
import InfinteScroll from '../components/infinteScroll/infinteScroll'
import { BrowserRouter, Form, Link, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import Productlisting from '../components/breadcrumbs/productlisting'
import ProductDetail from '../components/breadcrumbs/productDetail'
import Home from '../components/breadcrumbs/Home'
import Breadcrumbs from '../components/breadcrumbs/bread'
import Toast from '../components/toastContainer/toast'
import Accordin from '../components/collapsibleAccordin/Accordin'
import Avatar from '../components/avatarPicker/avatar'
import Progress from '../components/progressBarwithAdd/progress'
import ToastNew from '../components/toast/toast'
import Practice from '../components/test/practice'
import PasswordLength from '../components/passwordLength/passwordLength'
import FormValidation from '../components/formValidation/formvalidation'
import SelectGrid from '../components/selectingGrid/selectGrid'
import CryptoConverter from '../components/cryptoConverter/cryptoConverter'
import NestedComment from '../components/NeastedComments/NestedComment'
import JobBoard from '../components/JobBoardGreatFrontEnd/jobBoard'
import LikeButton from '../components/LikeButton/likeButton'
import TrafficLight from '../components/trafficLight/TrafficLight'
import DigitalClock from '../components/DigitalClock/digitalClock'
import DataTable from '../components/dataTable/dataTable'
import ColorMatchBox from '../components/colormatchingBox/colorMatchBox'
import PollWidget from '../components/PollWidget/pollWidget'
import ImgGallary from '../components/ImgGallary/imgGallary'
import EmiCalculator from '../components/EmiCalculator/emiCalculator'
import MineGame from './_components/mineGame/mineGame'
import FilterLogic from './_components/filterLogic/filterLogic'
import DiwaliGift from './_components/diwaligiftGen/diwaliGift'
import SnakeLadder from './_components/snakeLadder/snakeLadder'

const componentsArray = [
  { id: 1, name: 'Otp', component: <Otp /> },
  { id: 2, name: 'MultiSelect', component: <MultiSelect /> },
  { id: 3, name: 'PasswordGen', component: <PasswordGen /> },
  { id: 5, name: 'Expense', component: <Expense /> },
  { id: 6, name: 'InfinteScroll', component: <InfinteScroll /> },
  // { id: 7, name: 'Breadcrumbs', component: <Breadcrumbs /> },
  { id: 8, name: 'Home', component: <Home /> },
  { id: 9, name: 'ProductListing', component: <Productlisting /> },
  { id: 11, name: 'Toast', component: <Toast /> },
  { id: 12, name: 'Accordin', component: <Accordin /> },
  { id: 13, name: 'Avatar', component: <Avatar /> },
  // { id: 15, name: 'ToastNew', component: <ToastNew /> },
  { id: 16, name: 'Practice', component: <Practice /> },
  { id: 17, name: 'PasswordLength', component: <PasswordLength /> },
  { id: 18, name: 'FormValidation', component: <FormValidation /> },
  { id: 19, name: 'SelectGrid', component: <SelectGrid /> },
  { id: 20, name: 'CryptoConverter', component: <CryptoConverter /> },
  { id: 21, name: 'NestedComment', component: <NestedComment /> },
  { id: 22, name: 'JobBoard', component: <JobBoard /> },
  { id: 23, name: 'LikeButton', component: <LikeButton /> },
  { id: 24, name: 'TrafficLight', component: <TrafficLight /> },
  { id: 25, name: 'DigitalClock', component: <DigitalClock /> },
  { id: 26, name: 'DataTable', component: <DataTable /> },
  { id: 27, name: 'ColorMatchBox', component: <ColorMatchBox boxSize={12} /> },
  // { id: 28, name: 'PollWidget', component: <PollWidget /> }
  { id: 29, name: 'ImgGallary', component: <ImgGallary /> },
  { id: 30, name: 'progressbar', component: <ProgressBar /> },
  { id: 31, name: 'pagination', component: <Pagination /> },
  { id: 32, name: 'Emi Calculator', component: <EmiCalculator /> },
  { id: 33, name: 'MineGame', component: <MineGame /> },
  { id: 34, name: 'FilterLogic', component: <FilterLogic /> },
  { id: 35, name: 'diwaliGift', component: <DiwaliGift /> },
  { id: 36, name: 'snakeLadder', component: <SnakeLadder /> },
];

// Render the components or access them based on the array

function App() {
  const navigate = useNavigate()
  const param = useParams()

  function handleValue(e) {
    navigate(e.target.value)
  }

  return (
    <div className='flex flex-col flex-wrap gap-2 justify-center max-w-[1450px] mx-auto'>
      <div className='flex items-center justify-between mt-6'>
        {!param.id && <p className='projectShowName common-nameStyle'>Project</p>}
        {
          componentsArray.map((item) => {
            if (item.id == param.id) {
              return <div className='flex text-white w-fit gap-2  py-2 px-6 m-5'>
                <p className='projectShowTitle common-nameStyle'>{item.id} :</p>
                <p className='projectShowName common-nameStyle'>{item.name}</p>
              </div>
            }
          })
        }
        <select
          name=""
          id=""
          className="w-56 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
          onClick={handleValue}
        >
          {componentsArray.map((comp) => (
            <option
              value={`/project/${comp.id}`}
              key={comp.id}
              className="text-black bg-white hover:bg-gray-100 focus:bg-blue-100"
            >
              {comp.name}
            </option>
          ))}
        </select>

      </div>
      <Outlet />
    </div >
  );
}

export default App;
