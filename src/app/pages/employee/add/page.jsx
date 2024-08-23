import Header from '@/app/components/header'
import React from 'react'

const AddEmploye = () => {
    return (
        <div>
          <Header props={"Yeni Personel Ekle"} />
            <form>
            <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Personel Bilgileri</h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">Lütfen bilgileri eksiksiz doldurunuz</p>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-2">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Adı</label>
          <div class="mt-2">
            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Soyadı</label>
          <div class="mt-2">
            <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="tc-kimlik-no" class="block text-sm font-medium leading-6 text-gray-900">Tc Kimlik No</label>
          <div class="mt-2">
            <input type="text" maxLength={11} minLength={11} name="tc-kimlik-no" id="tc-kimlik-no" autocomplete="Tc-Kimlik-No" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Telefon</label>
          <div class="mt-2">
            <input id="phone" name="phone" type="text" maxLength={15} minLength={10} autocomplete="phone" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        


        <div class="sm:col-span-2">
          <label for="start-date" class="block text-sm font-medium leading-6 text-gray-900">İşe Başlama Tarihi</label>
          <div class="mt-2">
            <input type="date" name="start-date" id="start-date" autocomplete="start-date" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="duty" class="block text-sm font-medium leading-6 text-gray-900">Görev</label>
          <div class="mt-2">
            <select id="duty" name="duty" autocomplete="duty" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
              <option>KASIYER</option>
              <option>BEKCI</option>
              <option>MUHASEBE</option>
            </select>
          </div>
        </div>
      </div>
    </div>
            </form>

        </div>
    )
}

export default AddEmploye