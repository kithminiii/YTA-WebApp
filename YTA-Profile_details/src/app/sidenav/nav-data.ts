import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'employees',
        icon: 'fa fa-home',
        label: 'Employees',
        items: [
          {
              routeLink: 'list-view-active',
              icon: 'fa fa-file',
              label: 'People',
              /*items: [
                {
                  routeLink:'list-view',
                  icon: 'fa fa-file',
                  label: 'list-view'
              },
              {
                routeLink: 'people/detailed-profile-view',
                  icon: 'fa fa-file',
                  label: 'Detailed Profile View'
              },
              {
                routeLink: '',
                  icon: 'fa fa-file',
                  label: 'People List'
              }
            ]*/
          },
          {
              routeLink: 'people/teams',
              icon: 'fa fa-wrench',
              label: 'Teams'
          }
      ]
    },
    {
        routeLink: 'payrolls',
        icon: 'fa fa-home',
        label: 'Payroll',
        items: [
            {
                routeLink: 'payroll/runpayroll',
                icon: 'fa fa-copy',
                label: 'Run Payroll'
            },
            {
                routeLink: 'payroll/payrollhistory',
                icon: 'fa fa-copy',
                label: 'Payroll History'
            }
        ]
    },
    {
        routeLink: 'hiring',
        icon: 'fa fa-home',
        label: 'Hiring',
        expanded: true,
        items: [
            {
                routeLink: 'hiring/Jobs',
                icon: 'fa fa-copy',
                label: 'Jobs',
                items: [
                  {
                      routeLink: 'hiring/Jobs',
                      icon: 'fa fa-copy',
                      label: 'List View'
                  },
                  {
                      routeLink: 'hiring/',
                      icon: 'fa fa-copy',
                      label: 'Job Detail View'
                  }
                ]
            }/*,
            {
                routeLink: 'settings/customize',
                label: 'Customize'
            }*/
        ]
    },
];
