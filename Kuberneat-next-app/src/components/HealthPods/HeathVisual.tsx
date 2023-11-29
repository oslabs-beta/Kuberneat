"use client";
import React, { useEffect, useState } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Spinner, getKeyValue} from "@nextui-org/react";
import {useInfiniteScroll} from "@nextui-org/use-infinite-scroll";
import {useAsyncList} from "@react-stately/data";


interface Data { 
  Name: string;
  Status: string;
  Message: string;
  Error: string;
}

function createData(
  Name: string,
  Status: string,
  Message: string,
  Error: string,
): Data {
  return { Name, Status, Message, Error };
}


const HealthVisual = () => {
  const [podsData, setPodsData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    fetch('/health', {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => res.json())
      .then((data) => {
       const rows = data.map((pod: any) => createData(pod.Pod, pod.Status, pod.Message, pod.Error));
        setPodsData(rows);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  let list = useAsyncList({
    async load({signal, cursor}) {
      if (cursor){
        setIsLoading(false);
      }
      const res = await fetch(cursor || 'http://localhost:3000/Home/Health', {signal});
      const data = await res.json();
      setHasMore(data.next !== null);
      return {
        items: data.items,
        cursor: data.next,
      };
    }
  });
  const [loaderRef, scrollerRef] = useInfiniteScroll({hasMore, onLoadMore: () => list.loadMore});

  return (
    <>
    <div id="table" className="flex flex-row justify-center vw-100 vh-100">
      <Table
      isHeaderSticky
      aria-label="Pod Health"
      baseRef={scrollerRef}
      bottomContent={
        hasMore ? (<div className='flex w-full justify-center'>
        <Spinner ref={loaderRef} color='white' />
      </div>) : null
      }
      classNames={{
        base: "max-h-[520px] overflow-scroll",
        table: "min-h-[400px]",
      }}
      >
      <TableHeader>
        <TableColumn key="name">Name</TableColumn>
        <TableColumn key="status">Status</TableColumn>
        <TableColumn key="message">Message</TableColumn>
        <TableColumn key="error">Error</TableColumn>
      </TableHeader>
      <TableBody
       isLoading={isLoading}
       items={list.items}
       loadingContent={<Spinner color="white" />}
      >
         {(item) => (
          // @ts-ignore
          <TableRow key={item.name}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
  </Table>
    </div>
  </>
  ) 
};

export default HealthVisual;