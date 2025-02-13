import { Input } from 'antd';

const Searcher = ({ searchValue, inputText }) => {
  return (
    <>
      <Input.Search
        value={searchValue}
        onChange={inputText}
        placeholder='Buscar Pokemon'
      />
    </>
  )
}

export { Searcher }
