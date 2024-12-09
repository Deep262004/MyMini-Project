import React from 'react'

const react = () => {
  return (
     
      <div> 
      <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    {/* text - start */}
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
        React
      </h2>
      <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
        This is a section of some simple filler text, also known as placeholder
        text. It shares some characteristics of a real written text but is
        random or otherwise generated.
      </p>
    </div>
    {/* text - end */}
    <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
      {/* article - start */}
      <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
        <a
          href="#"
          className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
        >
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAKcArwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABgEHAgQFAwj/xABGEAABAwIDAwcJBQQJBQAAAAABAAIDBAUGERIhMXEHEzJBUVJhFSIzcoGRkrGyFDRTYnQlNUPhIyRCZKHBwtHwFmOCouL/xAAZAQACAwEAAAAAAAAAAAAAAAAABAECAwX/xAArEQACAQIFAwQCAgMAAAAAAAAAAQIDEQQSEyExQVFSFCIyYaHwM4FCcbH/2gAMAwEAAhEDEQA/AKqQhCsQCFICyEbigkwQvTmXI5pyLhY80L05lyOZci6Cx5oXpzTkc05FwseaFnzbkc25SQYIWfNuRzbkBcwQs+bcjm3IsFzBCy5tyNDkWIujFCktUIJBCEKABCEBAHtTx6nBdyithnA0jNcu3t89qcqKJvkmtP8AdZT/AOhWVWVhilBM1Rh2Y7ead7ll/wBNzfgu+FIGpRmodJ+QasfEsD/pub8F3woOG5vwXfCq+zUZqmhLyDWj4j+cOTfgu+FYOw7N+C74Uh5qM1ZUn5BrLxHd9hmb/Bd8KxFimP8ABd8KSdTu1Gp3eW8faYVPdxsO/kGo/Bd8KjyDUfgu+FJGp3eUand5X1F2MdJ9x48g1H4LvhUeQaj8J3wlI+bu8jU7vKdVdiNF+Q7+Qqj8F3wqHWOYNJdC7Z+VJGbu8piP9NH64+YVtZeJGhLyGSqo+azzGRHUubIMs034jjayqk4lKdR6RXrQymeHqOSPFCEJYbBAQgIA37d0xxTrRfumu/Sy/QUlW7pjinWj/dFd+lk+gpetyN0OGVkhChMioKCct+eW/PNCsTkcsMFfc6m71jNcdDpbCHdHnDtLuLRl8Q7FMVd2M6lRU4OTFGPDF/lpzPHZLg6PLMPFO7aO3LrHBcqaOSCV0UzHRSsOlzJG6S0+IVlXLlfuLblL5OoqJ9A15bGJmuL5Gg9LMEAZ8CuxRYpwrjuJtuxBRR0lY4ZRmR3X+SUbj4HLPx3KckXsmYa1WO8obfRTW/duUJwxtgGuwyHVcGqqtpPpcsnReDx/nu4bj0sEcnEt2iFyv5kpLflrZGDpfMN+ZJz0N47T1Zb1XJK9jV16eTPfYQ6Okqa+bmKKmmqZfw4Yy8+4Bb9dhm/2+l+01tnrYYMs3SuhOTR+bLo+1WVdOUSw4YhNtwlQRTiPYZGeZDnx6Tz/AMzK8cH8qNdcr7BQXqnpGQVbuajfAwtLHHYM8ycwTkPcrZY8XMtas1mUNvyVIoTdyoWCCwYlcyjjEVJVxieONo81hzIc0eAIzy6tSUFRqzsMwmpxUl1BZRelj9cfMLBZRemi9cfMKCxY+JPvD+JSfUekKcMS/eZOJSfUekKdxJz8HweKEISY+CAhAQBv27pjinWj/dFd+lk+gpKt3THFOtH+6K79LJ9BS9bkbocMrFQhCZFQVt8mB5vk9vksXpRJUEcRC3JVGrZ5F5W1NkvNud1Sh+Xg9mn/AEK9L5CuM2pX+0VI3ojgh3YmKhwJiepzbHaJm6TpLpXNjHHzjtHBNmFeS+tiusNRiEUxo4/PMDJC4yOG5p2AZdZ27d3WVVU5PoXniKUFuxn5N5rtHhN1TiWoj+wBmdOanLU2HLe8nZpPVn/suVyzm9i3Qvppv2IfNqGxZ56ydms9bTsy8d+3JdzHWGrviaKOkpbjBSW9uTnxFjiZXeOX9kbMh2+zLZwpYrhbLK+z3upprhR6Objya7PQRtYc94A3e7gzlbWT8nMVSKlrXV78Hzwti2PdHc6N7Ok2ojLeOoJ6vfJRd4q2d1nNNNSF2cLXy6XgdhzGWzbtz2rmWnBGIaXEVsbW2udkBqoy+VoD2tAcCcy0kDYOtLZJJ7o6axFKUdpDJy8aTU2Vw3ls+fsMaqncrJ5cqtr75bqQb4aZ0h4ud/8AKrZTV+bK4T+CILKL08Xrj5hYLKL00frj5hZjJZGJPvMnEpPqPSFOGJfvMnEpPqPSFO4k5+D4PFCEJMfBAQgIA37d0xxTrR/uiu/SSfQUlW3pjinKmdlaq0f3WT6Cl6quxuhwys17UNFU3CsjpaKF89RIcmRsGZP+w8V4bRsy3/4q3cPiiwJgZt6qIWy19axrss8i8v2sjB6gBtPAnsCbhHM9+Dn1qumlZXb2Rp2jk0obfS+UMW18bWM2uhZLojb6z959mXErvYbxRhKO7w2PDtM2Pn9Q56OHRG4gE7XHzjuPV7VUF9vlxv8AU/abpUukIPmRg5Mj9Vu4LUoKuShr6atp/SwStlb4lpz/AJe9WVVRftRg8LOpF6krvt0LbxRiXFMeMW4etIpYhPodBKYdTtJHnOdmSMgQ/q6lscpWKZcP2qG2UVXI651DBqqNgeyMbC/YBkXHYMh3uwJjZU2uWmhxQQ0NbROcJu7EcnkZduz59qoyWaqxli1hkfolr6gMbnt5pm4e5o9q1qNxWz5FcPCNRpuNlHn7Z5Mv2I6ybKO7XaaTLoR1EhI9gKxGJMQRPc3y3c2SNz1NdVPzB9pX0TZbbQWOhjpLZTthiaNpyGpx7XHrK4uPMNUmI7POTE1txhjL6ecDztQGeknrafHdv6lV0ZpXuaRxtJys47GhhDENTivCczKWs+y3qnZofIQ1w172uIIILXZbdm/PwWryd4oxBfLrXUF3hpmtomZSubGWyCTVkGnbl1O6upVhgi/nDuIKetLiKeT+iqG/kJ2niN/s8VdWI6ujw1ZrteaZjG1E4D9Y/iSaQxh+XuJVqcsyu3xyZYikqcnBRvm4+jhXLFGCb7cKi236mjbJBK6Fs9RHkDkSM2yNObd3XkuHiHktZLTfbsK1YqI3DWIJHg6h+R43+33qriSTm45k7z2rvYWxXc8M1QfRya6cnOWle7zHjw7D4j+Sy1Iy+aG/TTpq9KX9Pg4lTDNTTyQVETopYzk+N4ycCsY/Ts9cfMK2OUmhoMQ4UpsW29uiRrWc5s85zCQ3Jx7Wu2Z8VU8RznjP5x8ws5xyuwxQq6sb8PqWTiT7zJxKT6j0hTjiH7xLxKUKnplN4kVwisjXQhCTHgQEICAN+3Hz2pwpv3VW/pZPoKTKE+eOKcKI/sus/Sy/QVlNbjlDhlbZjLcrbw7JRY6wO2xVMvNV9GxrNg2t07GSDtaRsPE9oKqMbl7UVZU2+rjqqKZ8FRGc2SMdkR4bFvTnlZza9LUirOzW6Ny/WK5Yfqvs9zp3RknzJRtZJ6rt3sWnQUsldX01HT+lnlbGzLtJy/n71ZFn5SqOvpvsGLaJj2O2OlZHqjd60e3I+Iz4Bd7D2G8JzXeC9YdnDzBm7mYptTGlwI2tPnN3rVUlJ+xi8sXOnFqrGz7rg77YbXFTwYXcWlrqItEPeiGTCc+3b8+xUdJFU4NxcznWl8lBUtcOrnWb8/a1WLibDWJZ8XsxBapaWTmNAhidIWu0gec05jLI5u6+te3KPhmXEFqguVHSPZc4GDVAci97DtLNm8tO0e3tWtSMpcLdCuHqQptJyupLf6Y3Wy60t1o46ugnEsLxmHA7R4EdRXJxpiansNmne6Zv2yWMspof7Rcdgdl2Dr/mFS8NlxPRSl1PbLvTyEbXQwSNz9rQsTh3EdVK5z7Rc3yP3vkp37eJcFDxEnGyjuWjgKanmc9jYwLYDiC/wUjmn7NFlLUu/IDu4nd7fBXNf6ejxNZ7tZYHNNRTgMIH8OXSHs9m4e8Lm4Sw/U4WwtKaSlE95qW849ji0AP3NaSTlpbnt8c/BanJ9he+2K611bdp6d7a1ucjWPLnuk1Zhx2ZdbveppwcUo255KYisqknNStl4+ylXZtcQ4EEHIg7wu/hXCdzxLOBSs5qma4c5VSDJje3LtPgP8FZVyw9gmx3Ke5XyaMzzyOnEFRJqA1E9GNozI45hcHEPKk4wmjwzSimiaNDZ5AAQPyMGxvtz4BY6UYfNjnqZ1VajH+3wbfKRcaCwYWp8JW46pC1oeM9rGNOrN35nHblx8FVMOyZnrD5hE0sk8r5pnukke4ue95zLid5J7VEG2aP1h81nOedjFGlpQy3u+pY+IH/ANZk4lKdUfOTPiH71JxKV5+kmKzuXUFE8kIQlSwICEIA26Lpjim2iP7Oq/00n0FKNH0hxTTRH9n1X6eT6SqTQ9h/iyvRuCEDcFCsJArU5G4hT2u8XF34jWZ9gY0uP1KqlanJeOcwVeo2dMyyge2JoC2w/wAxLH/wtf6/6JNHjXElKS6G7T5OOrTJlIB4AOByCacL8pta65xQX/7O6kk810zGaTG47ictmnt2fLbWreiOCnYAdg7VWNWcXybVMNSmrOJe2OMRXfDsMVfR0lNV0JyEjnatUbjuJIPROzb28QtjCt9uFxs77xfIaahpNGuMNDgdA3vJJ2A9XvXL5OI7o3C74cQxx/YNGVO2oyLuay26gdmjsz+WS0OV1l5fb4W0cYNnaNVRzW12obtQ7o2ZdWe/qTrclHU/BxlCDnobXv8AL96nBvXKjd5ayobaDBT0gcRE50Wp5Hac9m3sy2Ll2zGd+qb9bpKy61D4m1MZfG06WuGoA5huQKVM89q9qBrpK+mZH03TMDeOaR1Jye7OwsNSjHaKLB5bqdrLpbaob5YHRn/xdn/rVbq0OXAtzszP7YM3+hVarV1aoymBd8PH96gs4PTR+sPmvNZQ+mj9cfMLEbLExD96k4lK8/STRiH71JxKV5+kmqwM8kIQlyAQhCANmk6Q4pmoj/UKv9PJ9JSxSnzwmOiP9Sqv08n0lVkdHCr2sQxuCFA3BCk54J75J77DbrlPbauRrIq3TzbnHIc4OrwzBy9g7UhqHdmYVoTcJKSMq1JVYOD6lkXHksrH3OV1vrKVlE9xczndWqME9HIAg5cQutRYZwvguFtbe6plTVt2s54df5IxvPic1W8OJr7DT8xHd61sYGQaJjsHgepcuaWWeR0s0skkjuk97tRPtW2rTW8Y7ivp8RNZalTb6W7GzGeOavETzTUwdTW4fwwfOl8X/wC27/LawZygTWaKOgugNTQDzWOBzfC3s8W+Hu7EjHaVCy1Z5s19zd4Wk6enbYtqvwRh7FMZr8NV0dMXbXNj86PPxZvYf+ZLywvya1NuvUNddKmnkhpnc5GyEklzhtGeYGQB2qrqepnpJRNSzSQyDdJG4td7wVvVWILzWQGCpulZLCdjmOmcWu4rXVp3zOO5g8NiEskant+1udrlMvsV8xBlRv5ylpWc1G5p2Pdnm5w7Rnsz8EoIULCcnKTbHKdNU4KC6As4PTR+uPmFgsoPTM9cfMKqLli4h+9ScSlefpJoxD96k4lK8/STVYGeSEIS5AIQhAHtTnzwu/RSZUlSP+zJ9JS7GdK3qWrMR1NduRYdw9RJNMWg9ukecjW3vJ0bfJsuksvLs3eUWK+nj5CRqb3kam95O/l2bvI8uzd5Aenj5CPqb3lGpveTz5dm7yg3ybvIsHp4+Qj6mqM07Ovc3eWIvVR31ZQuUdFL/ISs0Zp38t1H4ikXubvK2mu5XTXcRs1Gae/Lc3eU+XJu8jSXcq4ruIWa9ID/AE8frD5p6F8m7yDfJi0jUp013IsbGIH51Ug8SlqbrW5U1Rlzz3laDztKtUlcqzFCELEgEIQgAU5qEKSbk6kalCEE5mTqRqUIQGZk6kalCEBmZOaM1CEEXZOpGpQhAE6kalCEEE6lOtYoQBJcoQhAAhCFAAhCEACEIQAIQhAAhCEACEIQAIQhAAhCEACEIQAIQhAAhCEACEIQB//Z"
            loading="lazy"
            alt="Photo by Minh Pham"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </a>
        <div className="flex flex-1 flex-col p-4 sm:p-6">
          <h2 className="mb-2 text-lg font-semibold text-gray-800">
            <a
              href="#"
              className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              New trends in Tech
            </a>
          </h2>
          <p className="mb-8 text-gray-500">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text.
          </p>
          <div className="mt-auto flex items-end justify-between">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64"
                  loading="lazy"
                  alt="Photo by Brock Wegner"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div>
                <span className="block text-indigo-500">Mike Lane</span>
                <span className="block text-sm text-gray-400">
                  July 19, 2021
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* article - end */}
      {/* article - start */}
      <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
        <a
          href="#"
          className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv5hzCraSfy8CKAEVtISuvLTjb8ngCtTxROg&s"
            loading="lazy"
            alt="Photo by Lorenzo Herrera"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </a>
        <div className="flex flex-1 flex-col p-4 sm:p-6">
          <h2 className="mb-2 text-lg font-semibold text-gray-800">
            <a
              href="#"
              className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Working with legacy stacks
            </a>
          </h2>
          <p className="mb-8 text-gray-500">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text.
          </p>
          <div className="mt-auto flex items-end justify-between">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1586116104126-7b8e839d5b8c?auto=format&q=75&fit=crop&w=64"
                  loading="lazy"
                  alt="Photo by peter bucks"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div>
                <span className="block text-indigo-500">Jane Jackobs</span>
                <span className="block text-sm text-gray-400">
                  April 07, 2021
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* article - end */}
      {/* article - start */}
      <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
        <a
          href="#"
          className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
        >
          <img
            src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
            loading="lazy"
            alt="Photo by Magicle"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </a>
        <div className="flex flex-1 flex-col p-4 sm:p-6">
          <h2 className="mb-2 text-lg font-semibold text-gray-800">
            <a
              href="#"
              className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              10 best smartphones for devs
            </a>
          </h2>
          <p className="mb-8 text-gray-500">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text.
          </p>
          <div className="mt-auto flex items-end justify-between">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1592660503155-7599a37f06a6?auto=format&q=75&fit=crop&w=64"
                  loading="lazy"
                  alt="Photo by Jassir Jonis"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div>
                <span className="block text-indigo-500">Tylor Grey</span>
                <span className="block text-sm text-gray-400">
                  March 15, 2021
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* article - end */}
      {/* article - start */}
      <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
        <a
          href="#"
          className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
        >
          <img
            src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
            loading="lazy"
            alt="Photo by Martin Sanchez"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </a>
        <div className="flex flex-1 flex-col p-4 sm:p-6">
          <h2 className="mb-2 text-lg font-semibold text-gray-800">
            <a
              href="#"
              className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              8 High performance Notebooks
            </a>
          </h2>
          <p className="mb-8 text-gray-500">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text.
          </p>
          <div className="mt-auto flex items-end justify-between">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&q=75&fit=crop&w=64"
                  loading="lazy"
                  alt="Photo by Aiony Haust"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div>
                <span className="block text-indigo-500">Ann Park</span>
                <span className="block text-sm text-gray-400">
                  January 27, 2021
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* article - end */}
    </div>
  </div>
</div>

    </div>
    
  )
}

export default react