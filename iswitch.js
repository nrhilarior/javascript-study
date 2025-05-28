let day= 'monday';

switch (day) {
    case 'sunday':
        console.log('First day of the week')
    case 'monday':
        console.log('First business day of the week');
        break;
    case 'tuesday':
        console.log('Second business day of the week');
        break;
    case 'wednesday':
        console.log('Fourth businees day of the week');
        break;
    case 'thursday':
        console.log('Fifth businees day of the week');
        break;
    case 'friday':
        console.log('Last businees day of the week');
        break;
    case 'saturday':
        console.log('Arrived at the weekend');
        break;
    default:
        console.log('Day invaid');
}