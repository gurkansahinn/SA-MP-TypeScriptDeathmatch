#include <a_samp>
#include <samp-node>
#include <easydialog>
#include <streamer>

main() {

}

forward JS_DialogShow(playerid, id[], name[], type, header[], message[], button1[], button2[]);
public JS_DialogShow(playerid, id[], name[], type, header[], message[], button1[], button2[])
{
    Dialog_Show(playerid, id, name, type, header, message, button1, button2);
    return 1;
}
