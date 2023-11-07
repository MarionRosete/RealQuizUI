import React, { useEffect, useState, Fragment } from "react";
import { Tab } from "@headlessui/react";
import ReactEditor from ".././texteditor/Editor";

const TabsComponent = () => {
  return (
    <Tab.Group defaultIndex={0}>
      <Tab.List className="space-x-8">
        <Tab as={Fragment}>
          {({ selected }) => (
            <a className={selected ? tabsStyleActive : tabsStyleInActive}>
              Question
            </a>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <a className={selected ? tabsStyleActive : tabsStyleInActive}>
              Choice A
            </a>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <a className={selected ? tabsStyleActive : tabsStyleInActive}>
              Choice B
            </a>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <a className={selected ? tabsStyleActive : tabsStyleInActive}>
              Choice C
            </a>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <a className={selected ? tabsStyleActive : tabsStyleInActive}>
              Choice D
            </a>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className="mt-2">
          <ReactEditor />
        </Tab.Panel>
        <Tab.Panel className="mt-2">
          <ReactEditor />
        </Tab.Panel>
        <Tab.Panel className="mt-2">
          <ReactEditor />
        </Tab.Panel>
        <Tab.Panel className="mt-2">
          <ReactEditor id />
        </Tab.Panel>
        <Tab.Panel className="mt-2">
          <ReactEditor />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

const tabsStyleActive =
  "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";
const tabsStyleInActive =
  "inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";

export default TabsComponent;
