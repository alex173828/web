import React from 'react';

class Form extends React.Component {
	render() {
		return (
			<div>
			   <form method="POST" action="https://cp.unisender.com/ru/subscribe?hash=6ttbd9476zenbbkbrdqopghjgdmyrhohady1wrt3t748e97mhhsyy" name="subscribtion_form" us_mode="embed">
                   <input
                      type="text"
                      name="f_6327621"
                      _validator="string"
                      _label=""
                      _required="0"
                      placeholder="Имя"
                   />

                   <input
				   	type="text"
					name="email"
					_validator="email"
					_required="1"
					_label=""
					 placeholder="E-mail"
				 />

				 <input type="text" name="phone" _validator="phone" _label="" _required="0" placeholder="Телефон"/>
				 <label> Я согласен с политикой конфиденциальности</label><input type="checkbox" data-virtual-name="argument-with-terms" _fullerrormessage="Это поле обязательно" _required="1" />
				 <textarea rows="5"  name="f_6395093" _validator="text" _label="" _required="0" placeholder="Комментарии"></textarea>
				 <button href="javascript:" target="_blank" >Оставить заявку на участие</button>

				 <input type="hidden" name="charset" value="UTF-8"/>
				 <input type="hidden" name="default_list_id" value="15736441"/>
				 <input type="hidden" name="overwrite" value="2"/>
				 <input type="hidden" name="is_v5" value="1"/>

			   </form>
			</div>
		)
	}
}

export default Form;
